import { getRandomQuote } from "~/server/queries";
import { calculateCarSpeed } from "~/lib/utils";
import { GameProvider } from "~/contexts/GameContext";
import Play from "./_components/play";

export const dynamic = "force-dynamic";

export default async function PlayPage() {
  const quote = (await getRandomQuote())[0];

  if (!quote) {
    throw new Error("No quotes found. Please add some quotes to the database.");
  }

  const carSpeed = calculateCarSpeed(quote.text.length);
  return (
    <GameProvider>
      <div className="flex h-[calc(100vh-3.6rem)] w-screen flex-col items-center justify-center p-0">
        <Play quote={quote} carSpeed={carSpeed} />
      </div>
    </GameProvider>
  );
}
