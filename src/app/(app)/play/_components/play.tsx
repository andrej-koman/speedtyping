"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";

import GameText from "./game-text";
import Game3DModel from "./game3d";
import Options from "./options";
import { useGameSettings } from "~/contexts/GameSettingsContext";
import { useState } from "react";
import { setToLocalStorage } from "~/lib/game-settings";

export default function Play({
  quote,
  carSpeed,
  defaultLayout = [50, 50],
}: {
  quote: Quote;
  carSpeed: number;
  defaultLayout?: number[];
}) {
  const { has3D, textSize } = useGameSettings();
  const [show3D, setShow3D] = useState(has3D.current);
  const [useTextSize, setUseTextSize] = useState(textSize.current);

  const handle3DChange = (pressed: boolean) => {
    has3D.current = pressed;
    setShow3D(has3D.current);
    setToLocalStorage("has3D", has3D.current + "");
  };

  const handleTextSizeChange = (value: string) => {
    textSize.current = value;
    setUseTextSize(textSize.current);
    setToLocalStorage("textSize", textSize.current);
  };

  return (
    <>
      {show3D ? (
        <ResizablePanelGroup
          direction="vertical"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
              sizes,
            )}`;
          }}
        >
          <ResizablePanel minSize={30} defaultSize={defaultLayout[0]}>
            <Options
              handle3DChange={handle3DChange}
              handleTextSizeChange={handleTextSizeChange}
            />
            <div
              className={`-mt-12 flex h-[100%] items-center justify-center text-${useTextSize}`}
            >
              <GameText carSpeed={carSpeed} quote={quote} />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className={"w-[100%]"} />
          <ResizablePanel minSize={40} defaultSize={defaultLayout[1]}>
            <Game3DModel carSpeed={carSpeed} />
          </ResizablePanel>
        </ResizablePanelGroup>
      ) : (
        <>
          <Options
            handle3DChange={handle3DChange}
            handleTextSizeChange={handleTextSizeChange}
          />
          <div
            className={`flex h-[100%] items-center justify-center text-${useTextSize}`}
          >
            <GameText className="mb-24" carSpeed={carSpeed} quote={quote} />
          </div>
        </>
      )}
    </>
  );
}
