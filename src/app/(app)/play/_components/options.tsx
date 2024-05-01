"use client";
import { Toggle } from "~/components/ui/toggle";
import Icon3D from "~/icons/3d-icon";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "~/components/ui/dropdown-menu";

import { useGameSettings } from "~/contexts/GameSettingsContext";
import { Button } from "~/components/ui/button";
import TextIcon from "~/icons/text-icon";

import { textSizeMapping } from "~/lib/utils";

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
                <TextIcon className="mr-2 h-4 w-4" />
                {textSizeMapping[textSize.current]}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Text Size</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={textSize.current}
                onValueChange={handleTextSizeChange}
              >
                <DropdownMenuRadioItem value="sm">Small</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="md">Medium</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="2xl">Large</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
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
