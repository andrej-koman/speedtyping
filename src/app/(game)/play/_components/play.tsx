"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";

import GameText from "./game-text";
import Game3DModel from "./game3d";
import Options from "./options";

import { useState, useEffect } from "react";
import { useGame } from "~/contexts/GameContext";
import { TooltipProvider } from "~/components/ui/tooltip";

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
  };

  const handleRestartGame = () => {
    const correctLetters = document.getElementsByClassName("correct");

    // For some reason, this is how you have to do it
    Array.prototype.forEach.call(correctLetters, (letter: Element) => {
      letter.classList.remove("correct");
    });

    setHasStarted(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.ctrlKey) {
        console.log(e.key);
        if (e.key.toLowerCase() === "q") {
          handleRestartGame();
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const OptionsMounted = (
    <Options
      handle3DChange={handle3DChange}
      handleTextSizeChange={handleTextSizeChange}
      handleRestartGame={handleRestartGame}
      show3D={show3D}
      textSize={useTextSize}
      quote={quote}
      hasStarted={hasStarted}
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
            <Game3DModel carSpeed={carSpeed} />
          </ResizablePanel>
        </ResizablePanelGroup>
      ) : (
        <>
          {OptionsMounted}
          <div
            className={`flex h-[100%] items-center justify-center text-${useTextSize}`}
          >
            <GameText
              className="mb-24"
              carSpeed={carSpeed}
              quote={quote}
              has3D={show3D}
            />
          </div>
        </>
      )}
    </TooltipProvider>
  );
}
