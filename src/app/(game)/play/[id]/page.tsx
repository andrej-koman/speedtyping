import { getQuoteById, isQuoteFavoritedByUser } from "~/server/queries";
import { calculateCarSpeed } from "~/lib/game";
import { GameProvider } from "~/contexts/GameContext";
import Play from "../_components/play";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: t("play"),
    description: t("description"),
  };
}

const getSettings = async (quoteId: number) => {
  const settings = cookies().get("gameSettings")?.value ?? "";
  const isFavorite = await isQuoteFavoritedByUser(quoteId);
  const defaultSettings = {
    has3D: false,
    textSize: "md",
    isFavorite,
  };

  if (!settings) {
    return defaultSettings;
  }

  const settingsParsed = JSON.parse(settings) as {
    has3D: boolean;
    textSize: string;
  };

  return {
    ...settingsParsed,
    isFavorite,
  };
};

export default async function PlayPage({ params }: { params: { id: number } }) {
  const quote = await getQuoteById(params.id);
  const settings = await getSettings(params.id);
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
      <div className="flex h-[calc(100vh-5rem)] w-screen flex-col items-center justify-center p-0">
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
