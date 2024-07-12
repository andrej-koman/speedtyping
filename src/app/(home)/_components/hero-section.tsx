"use client";
import { useTranslations } from "next-intl";
import { MonitorPlay } from "lucide-react";

import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations();
  return (
    <div className="relative w-full overflow-clip bg-[linear-gradient(to_bottom,#0c0a09_0%,#400814_63%,#e11d48_100%)] py-[72px] sm:py-24">
      <div className="absolute left-1/2 top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] bg-black bg-[radial-gradient(closest-side,#0c0a09_82%,#7d1027)] sm:top-[calc(100%-120px)] sm:h-[500px] sm:w-[1536px] lg:h-[550px] lg:w-[2400px]" />
      <div className="relative mx-auto xl:w-[75rem]">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 rounded-lg border border-white/30 px-2 py-1"
          >
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent [-webkit-background-clip:text]">
              This app is currently in development
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <h1 className="mt-8 text-center text-5xl font-bold tracking-tighter sm:text-7xl">
            {t("name")}
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="mt-8 max-w-md text-center text-xl">
            {t("description")}
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/home">
              <MonitorPlay className="mr-2 h-5 w-5" />
              {t("play")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
