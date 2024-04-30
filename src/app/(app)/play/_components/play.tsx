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

export default function Play({
  quote,
  carSpeed,
}: {
  quote: Quote;
  carSpeed: number;
}) {
  const { has3D, textSize } = useGameSettings();
  const [show3D, setShow3D] = useState(has3D.current);
  const [useTextSize, setUseTextSize] = useState(textSize.current);

  const handle3DChange = (pressed: boolean) => {
    has3D.current = pressed;
    setShow3D(pressed);
  };

  const handleTextSizeChange = (value: string) => {
    textSize.current = value;
    setUseTextSize(textSize.current);
  };

  return (
    <>
      {show3D ? (
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel className="min-h-[250px]">
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
          <ResizablePanel className="min-h-[250px]">
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
