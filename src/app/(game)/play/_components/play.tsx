"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";

import GameText from "./game-text";
import Game3DModel from "./game3d";

import { useState } from "react";
import { useGame } from "~/contexts/GameContext";
import { TooltipProvider } from "~/components/ui/tooltip";
import { type PlayStats } from "types/game";
import { savePlayStats } from "../[id]/actions";
import { useRouter } from "next/navigation";
import Loader from "~/app/_components/loader";

export default function Play({
  quote,
  carSpeed,
  defaultLayout = [50, 50],
  settings,
}: {
  quote: Quote;
  carSpeed: number;
  defaultLayout?: number[];
  settings: {
    isFavorite: boolean;
  };
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  quote.isFavorite = settings.isFavorite;

  const { hasStartedState } = useGame();
  const [hasStarted, setHasStarted] = hasStartedState;

  const handleGameStart = () => {
    setHasStarted(true);
  };

  const handleGameFinish = async (stats: PlayStats) => {
    setIsLoading(true);
    // Save the stats to the database
    const id = await savePlayStats(stats, quote.id);
    // Redirect to the results page
    router.push(`/results/${id}`);
  };

  const GameTextMounted = (
    <GameText
      quote={quote}
      carSpeed={carSpeed}
      handleGameStart={handleGameStart}
      handleGameFinish={handleGameFinish}
    />
  );

  if (isLoading) return <Loader />;

  return (
    <TooltipProvider>
      <ResizablePanelGroup
        direction="vertical"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes,
          )}; max-age=${24 * 60 * 60 * 365};`;
        }}
      >
        <ResizablePanel minSize={30} defaultSize={defaultLayout[0]}>
          <div className={`-mt-12 flex h-[100%] items-center justify-center`}>
            {GameTextMounted}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className={hasStarted ? "opacity-0" : ""} />
        <ResizablePanel minSize={40} defaultSize={defaultLayout[1]}>
          <Game3DModel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}