"use client";
import { useEffect, useState } from "react";
import { useStats } from "~/contexts/StatsContext";
import { type Results } from "types/game";
import ResultsChart from "./results-chart";
import { Button, buttonVariants } from "~/components/ui/button";
import { RotateCcw } from "lucide-react";
import Link from "next/link";

import { type ChartConfig } from "~/components/ui/chart";
import { useTranslations } from "next-intl";

const chartConfig = {
  wpm: {
    label: "WPM",
    color: "hsl(var(--chart-1))",
  },
  accuracy: {
    label: "Accuracy",
    color: "hsl(var(--chart-2))",
  },
  mistakes: {
    label: "Mistakes",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export default function Results({
  results,
  charts,
}: {
  results: Results;
  charts: { key: string; label: string; color: string; icon: JSX.Element }[];
}) {
  const t = useTranslations();
  const { setProgress, setText, setLevel } = useStats();
  const [activeChart, setActiveChart] =
    useState<keyof typeof chartConfig>("wpm");

  useEffect(() => {
    if (results.play.viewed === false) {
      // First update the wpm
      setText(`+${results.gainedXp} XP`);
      // Then update the progress
      if (
        results.targetLevel === undefined ||
        results.targetProgress === undefined
      ) {
        return;
      }
      // TODO
      // For now, no animation is implemented
      // I do intend to implement an animation in the future
      setProgress(results.targetProgress);
      // Then update the level
      setLevel(results.targetLevel);
    }
  }, []);

  return (
    <div className="flex w-3/5 flex-col items-stretch space-y-2 p-0">
      <div className="flex justify-between">
        <div className="flex flex-row gap-2">
          {charts.map((chart) => {
            const chartKey = chart.key as keyof typeof chartConfig;
            return (
              <Button
                key={chartKey}
                variant="outline"
                className={activeChart === chartKey ? "bg-secondary" : ""}
                data-active={activeChart === chartKey}
                size="sm"
                onClick={() => setActiveChart(chartKey)}
              >
                {chart.icon}
                {chart.label}
              </Button>
            );
          })}
        </div>
        <div className="flex flex-row gap-2">
          <Link
            href={"/play/" + results.quote.id}
            className={buttonVariants({
              variant: "default",
              size: "sm",
            })}
          >
            <RotateCcw size={16} className="mr-2" />
            {t("playAgain")}
          </Link>
        </div>
      </div>
      <ResultsChart
        results={results}
        chartConfig={chartConfig}
        activeChart={activeChart}
      />
    </div>
  );
}
