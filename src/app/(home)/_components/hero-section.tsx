"use client";
import { useTranslations } from "next-intl";
import { MonitorPlay } from "lucide-react";

import { buttonVariants } from "~/components/ui/button";
import Link from "next/link";
import { cn } from "~/lib/utils";

export default function HeroSection() {
  const t = useTranslations();
  return (
    <div className="relative w-full overflow-clip bg-[linear-gradient(to_bottom,#0c0a09_0%,#400814_63%,#e11d48_100%)] px-2 py-[72px] sm:py-24">
      <div className="absolute left-1/2 top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] bg-black bg-[radial-gradient(closest-side,#0c0a09_82%,#7d1027)] sm:top-[calc(100%-120px)] sm:h-[500px] sm:w-[1536px] lg:top-[calc(100%-85px)] lg:h-[280px] lg:w-[2600px] lg:bg-[radial-gradient(closest-side,#0c0a09_82%,#95132f)]" />
      <div className="relative mx-auto xl:w-[75rem]">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 rounded-lg border border-white/30 px-2 py-1"
          >
            <span className="bg-gradient-to-r from-red-200 to-blue-500 bg-clip-text text-transparent [-webkit-background-clip:text]">
              {t("developmentText")}
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <h1 className="mt-8 text-center text-5xl font-bold tracking-tighter sm:text-8xl">
            {t("name")}
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="mt-8 max-w-md text-center text-xl">
            {t("description")}
          </p>
        </div>
        <div className="mt-16 flex justify-center lg:mb-4 lg:mt-8">
          {false && (
            <Link
              href="/home"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                }),
                "hidden lg:inline-flex",
              )}
            >
              <MonitorPlay className="mr-2 h-5 w-5" />
              {t("play")}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
