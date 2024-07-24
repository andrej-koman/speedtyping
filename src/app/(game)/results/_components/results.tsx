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
import { cn } from "~/lib/utils";
import ResultsCard from "./results-card";
import { CardContent, CardHeader, Card } from "~/components/ui/card";

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
  play,
}: {
  results: Results;
  charts: { key: string; label: string; color: string; icon: JSX.Element }[];
  play: Play;
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

  const resultsData = [
    {
      data: play.wpm,
      title: "WPM",
      personalBest: results.personalBests.wpm,
    },
    {
      data: play.accuracy,
      title: "Accuracy",
      personalBest: results.personalBests.accuracy,
    },
    {
      data: play.mistakes,
      title: "Mistakes",
      personalBest: results.personalBests.mistakes,
    },
  ];

  return (
    <div className="flex w-3/5 flex-col items-stretch space-y-6 p-0">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex flex-row">
            {charts.map((chart) => {
              const chartKey = chart.key as keyof typeof chartConfig;
              return (
                <Button
                  key={chartKey}
                  variant="outline"
                  className={cn(
                    activeChart === chartKey ? "bg-secondary" : "",
                    chartKey == "wpm" ? "rounded-e-none" : "",
                    chartKey == "accuracy" ? "rounded-none" : "",
                    chartKey == "mistakes" ? "rounded-s-none" : "",
                  )}
                  data-active={activeChart === chartKey}
                  onClick={() => setActiveChart(chartKey)}
                >
                  {chart.icon}
                  {chart.label}
                </Button>
              );
            })}
          </div>
          <h5 className="font-bold underline underline-offset-8">
            Last 10 plays
          </h5>
          <div className="flex flex-row gap-2">
            <Link
              href={"/play/" + results.quote.id}
              className={buttonVariants({
                variant: "default",
              })}
            >
              <RotateCcw size={18} className="mr-2" />
              {t("playAgain")}
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <ResultsChart
            results={results}
            chartConfig={chartConfig}
            activeChart={activeChart}
          />
        </CardContent>
      </Card>
      <div className="flex items-center justify-between gap-52">
        {resultsData.map((object) => {
          return (
            <ResultsCard
              key={object.title}
              data={object.data}
              title={object.title}
              personalBest={object.personalBest}
              className="w-max-1/3 w-full"
            />
          );
        })}
      </div>
    </div>
  );
}
