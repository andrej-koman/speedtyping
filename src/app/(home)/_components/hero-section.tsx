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
  const t = useTranslations();
  return (
    <div className="w-full px-2 pt-2 xl:w-[75rem]">
      <TooltipProvider delayDuration={0}>
        <div className="hero grid-cols-2 grid-rows-1 rounded-lg px-8 py-12 xl:grid">
          <div>
            <h1 className="font-bold tracking-tighter sm:text-center md:text-start">
              {t("name")}
            </h1>
            <h2 className="sm:text-center md:text-start">{t("description")}</h2>
          </div>
          <div className="relative hidden xl:block">
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
        </div>
      </TooltipProvider>
    </div>
  );
}
