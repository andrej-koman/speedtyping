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

export default function Play({
  quote,
  carSpeed,
  defaultLayout = [50, 50],
  textSize,
  has3D,
}: {
  quote: Quote;
  carSpeed: number;
  defaultLayout?: number[];
  textSize: string;
  has3D: boolean;
}) {
  const [show3D, setShow3D] = useState(has3D);
  const [useTextSize, setUseTextSize] = useState(textSize);

  const handle3DChange = (pressed: boolean) => {
    setShow3D(pressed);
    document.cookie = `has3D=${pressed}; max-age=${24 * 60 * 60 * 365};`;
  };

  const handleTextSizeChange = (value: string) => {
    setUseTextSize(value);
    document.cookie = `textSize=${value}; max-age=${24 * 60 * 60 * 365};`;
  };

  return (
    <>
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
            <Options
              handle3DChange={handle3DChange}
              handleTextSizeChange={handleTextSizeChange}
              show3D={show3D}
              textSize={useTextSize}
            />
            <div
              className={`-mt-12 flex h-[100%] items-center justify-center text-${useTextSize}`}
            >
              <GameText carSpeed={carSpeed} quote={quote} has3D={show3D} />
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
            show3D={show3D}
            textSize={useTextSize}
          />
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
    </>
  );
}
