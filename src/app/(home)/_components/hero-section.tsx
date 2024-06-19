"use client";
import { useTranslations } from "next-intl";
import CarSection from "./car-section";
import { Grab } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "~/components/ui/tooltip";

export default function HeroSection() {
  const t = useTranslations("Project");
  return (
    <div className="hero m-8 grid w-full grid-cols-2 grid-rows-1 rounded-lg px-8 py-12 xl:w-[75rem]">
      <TooltipProvider delayDuration={0}>
        <div>
          <h1 className="font-bold">{t("name")}</h1>
          <h2>{t("description")}</h2>
        </div>
        <div className="relative">
          <CarSection />
          <Tooltip>
            <TooltipTrigger asChild>
              <Grab className="absolute right-10 top-5 h-6 w-6" />
            </TooltipTrigger>
            <TooltipContent className="bg-black text-sm">
              <p>{t("moveTheCar")}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
}
