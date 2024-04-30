import { getRandomQuote } from "~/server/queries";
import Game3DModel from "./_components/game3d";
import { calculateCarSpeed } from "~/lib/utils";
import Game from "./_components/game";
import { GameProvider } from "~/contexts/GameContext";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";

export const dynamic = "force-dynamic";

export default async function Play() {
  const quote = (await getRandomQuote())[0];
  if (!quote) {
    throw new Error("No quotes found. Please add some quotes to the database.");
  }

  const carSpeed = calculateCarSpeed(quote.text.length);

  return (
    <GameProvider>
      <div className="flex h-[calc(100vh-3.6rem)] w-screen flex-col items-center justify-center p-0">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel>
            <Game carSpeed={carSpeed} quote={quote} />
          </ResizablePanel>
          <ResizableHandle withHandle className={"w-[100%]"} />
          <ResizablePanel>
            <Game3DModel carSpeed={carSpeed} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </GameProvider>
  );
}
