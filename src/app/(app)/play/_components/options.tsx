"use client";
import { Toggle } from "~/components/ui/toggle";
import Icon3D from "~/icons/3d-icon";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import { useGameSettings } from "~/contexts/GameSettingsContext";
import { Button } from "~/components/ui/button";
import TextIcon from "~/icons/text-icon";

export default function Options({
  handle3DChange,
  handleTextSizeChange,
}: {
  handle3DChange: (pressed: boolean) => void;
  handleTextSizeChange: (value: string) => void;
}) {
  const { has3D, textSize } = useGameSettings();

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center">
      <div className="flex flex-col justify-center xl:w-[75rem]">
        <div className="flex flex-row justify-center space-x-1 p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <TextIcon className="h-4 w-4 mr-2" />
                {textSize.current}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleTextSizeChange("sm")}>
                sm
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTextSizeChange("md")}>
                md
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTextSizeChange("lg")}>
                lg
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTextSizeChange("xl")}>
                xl
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTextSizeChange("2xl")}>
                2xl
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTextSizeChange("3xl")}>
                3xl
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Toggle
            defaultPressed={has3D.current}
            onPressedChange={handle3DChange}
            size="sm"
            variant="outline"
          >
            <Icon3D className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
    </div>
  );
}
