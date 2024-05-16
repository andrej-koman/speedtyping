import { getQuoteById } from "~/server/queries";
import { calculateCarSpeed } from "~/lib/utils";
import { GameProvider } from "~/contexts/GameContext";
import Play from "../_components/play";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

const getSettings = () => {
  const settings = cookies().get("gameSettings")?.value ?? "";

  if (!settings) {
    return { has3D: true, textSize: "md" };
  }

  return JSON.parse(settings) as { has3D: boolean; textSize: string };
};

export default async function PlayPage({ params }: { params: { id: number } }) {
  const quote = await getQuoteById(params.id);
  const settings = getSettings();
  const layout = cookies().get("react-resizable-panels:layout");

  if (!quote) {
    throw new Error("No quotes found. Please add some quotes to the database.");
  }

  const carSpeed = calculateCarSpeed(quote.text.length);
  const defaultLayout = layout
    ? (JSON.parse(layout.value) as number[])
    : undefined;

  return (
    <GameProvider>
      <div className="flex h-[calc(100vh-3.6rem)] w-screen flex-col items-center justify-center p-0">
        <Play
          settings={settings}
          defaultLayout={defaultLayout}
          quote={quote}
          carSpeed={carSpeed}
        />
      </div>
    </GameProvider>
  );
}
