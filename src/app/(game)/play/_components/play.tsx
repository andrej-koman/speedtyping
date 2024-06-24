"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";

import GameText from "./game-text";
import Game3DModel from "./game3d";
import Options from "./options";

import { useState } from "react";
import { useGame } from "~/contexts/GameContext";
import { TooltipProvider } from "~/components/ui/tooltip";
import { useStats } from "~/contexts/StatsContext";

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
    has3D: boolean;
    textSize: string;
    isFavorite: boolean;
  };
}) {
  const { setLevel, setProgress } = useStats();
  const [show3D, setShow3D] = useState(settings.has3D);
  const [useTextSize, setUseTextSize] = useState(settings.textSize);
  quote.isFavorite = settings.isFavorite;

  const { hasStartedState } = useGame();
  const [hasStarted, setHasStarted] = hasStartedState;

  const handle3DChange = (pressed: boolean) => {
    setShow3D(pressed);
    settings.has3D = pressed;
    document.cookie = `gameSettings=${JSON.stringify(settings)}; max-age=${24 * 60 * 60 * 365};`;
  };

  const handleTextSizeChange = (value: string) => {
    setUseTextSize(value);
    settings.textSize = value;
    document.cookie = `gameSettings=${JSON.stringify(settings)}; max-age=${24 * 60 * 60 * 365};`;
    setLevel((prev) => prev + 1);
    setProgress((prev) => prev + 1);
  };

  const OptionsMounted = (
    <Options
      handle3DChange={handle3DChange}
      handleTextSizeChange={handleTextSizeChange}
      show3D={show3D}
      textSize={useTextSize}
      quote={quote}
      hasStarted={hasStarted}
      setHasStarted={setHasStarted}
    />
  );

  return (
    <TooltipProvider>
      {show3D ? (
        <ResizablePanelGroup
          direction="vertical"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
              sizes,
            )}; max-age=${24 * 60 * 60 * 365};`;
          }}
        >
          <ResizablePanel minSize={30} defaultSize={defaultLayout[0]}>
            {OptionsMounted}
            <div
              className={`-mt-12 flex h-[100%] items-center justify-center text-${useTextSize}`}
            >
              <GameText carSpeed={carSpeed} quote={quote} has3D={show3D} />
            </div>
          </ResizablePanel>
          <ResizableHandle
            withHandle
            className={hasStarted ? "opacity-0" : ""}
          />
          <ResizablePanel minSize={40} defaultSize={defaultLayout[1]}>
            <Game3DModel />
          </ResizablePanel>
        </ResizablePanelGroup>
      ) : (
        <>
          {OptionsMounted}
          <div
            className={`mb-32 flex h-[100%] items-center justify-center text-${useTextSize}`}
          >
            <GameText carSpeed={carSpeed} quote={quote} has3D={show3D} />
          </div>
        </>
      )}
    </TooltipProvider>
  );
}
