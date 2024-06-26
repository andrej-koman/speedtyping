"use client";
import { useEffect, useState } from "react";

import { type OptionsProps } from "types/game";
import { Box, SlidersHorizontal, Type, Star, RotateCcw } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Toggle } from "~/components/ui/toggle";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "~/components/ui/dropdown-menu";

import { useGame } from "~/contexts/GameContext";
import { useUser } from "@clerk/nextjs";
import { textSizeMapping } from "~/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import {
  TooltipContent,
  Tooltip,
  TooltipTrigger,
} from "~/components/ui/tooltip";

import { addQuoteToFavorites, removeQuoteFromFavorites } from "../[id]/actions";
import { toast } from "sonner";
import CameraSheet from "./camera-sheet";
import { Quaternion } from "three";
import { useTranslations } from "next-intl";

export default function Options({
  handle3DChange,
  handleTextSizeChange,
  setHasStarted,
  show3D,
  textSize,
  quote,
  hasStarted,
}: OptionsProps) {
  const t = useTranslations();
  const {
    carStartRotationRef,
    carStartPositionRef,
    currentLetterIndexRef,
    currentWordIndexRef,
    targetQuaternionRef,
    tRef,
    carRef,
  } = useGame();
  const { user } = useUser();
  const [isFavorite, setIsFavorite] = useState<boolean>(
    quote?.isFavorite ?? false,
  );

  const handleRestartGame = () => {
    const correctLetters = document.querySelectorAll(".letter.correct");

    // For some reason, this is how you have to do it
    Array.prototype.forEach.call(correctLetters, (letter: Element) => {
      letter.classList.remove("correct");
    });

    // This resets the car position
    if (
      carRef.current &&
      carStartRotationRef.current &&
      carStartPositionRef.current
    ) {
      carRef.current.setRotationFromEuler(carStartRotationRef.current);
      carRef.current.position.set(
        carStartPositionRef.current.x,
        carStartPositionRef.current.y,
        carStartPositionRef.current.z,
      );
    }

    // This resets the word and letter indexes
    // No need for checks, since the refs are always set
    currentWordIndexRef.current = 0;
    currentLetterIndexRef.current = 0;

    // Reset the quaternion and t
    targetQuaternionRef.current = new Quaternion();
    tRef.current = 0;

    setHasStarted(false);
  };

  const handleFavorite = async () => {
    if (!quote || !user) {
      throw new Error("Invalid state while adding to favorites");
    }

    if (isFavorite) {
      // Remove from favorites
      await removeQuoteFromFavorites(quote.id, user.id).then((res) => {
        if (!res) {
          throw new Error("Something is wrong");
        }

        switch (res.status) {
          case "error":
            toast.error(res.message);
            break;
          case "success":
            toast.info(res.message);
            setIsFavorite(false);
            break;
        }
      });
    } else {
      // Add to favorites
      await addQuoteToFavorites(quote.id, user.id).then((res) => {
        if (!res) {
          throw new Error("Something is wrong");
        }
        switch (res.status) {
          case "error":
            toast.error(res.message);
            break;
          case "success":
            toast.success(res.message);
            setIsFavorite(true);
            break;
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "q") {
        e.preventDefault();
        handleRestartGame();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sticky top-0 z-50 flex h-12 w-full justify-center">
      {hasStarted ? (
        <div className="flex items-center justify-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  handleRestartGame();
                }}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex justify-center">
                {t("Options.restartGame")}
                <br />
                Ctrl + R
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      ) : (
        <div className="grid grid-cols-3 grid-rows-1 space-x-1 xl:w-[60rem]">
          <div></div>
          <div className="flex flex-row items-center justify-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline">
                  <Type className="mr-2 h-4 w-4" />
                  {textSizeMapping[textSize]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Text Size</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={textSize}
                  onValueChange={handleTextSizeChange}
                >
                  <DropdownMenuRadioItem value="sm">
                    Small
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="md">
                    Medium
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="2xl">
                    Large
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Toggle
              defaultPressed={show3D}
              onPressedChange={handle3DChange}
              size="sm"
              variant="outline"
              className="text-xs"
            >
              <Box className="mr-2 h-4 w-4" />
              3D
            </Toggle>
            {show3D && (
              <Sheet>
                <SheetTrigger asChild>
                  <Toggle size="sm" variant="outline" className="text-xs">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Camera
                  </Toggle>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Camera Settings</SheetTitle>
                    <SheetDescription>
                      Configure the 3D camera to your liking.
                    </SheetDescription>
                    <CameraSheet />
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            )}
          </div>
          <div className="flex items-center justify-end">
            <button type="submit" onClick={handleFavorite}>
              <Star
                fill={isFavorite ? "currentColor" : "none"}
                className="h-5 w-5 cursor-pointer"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
