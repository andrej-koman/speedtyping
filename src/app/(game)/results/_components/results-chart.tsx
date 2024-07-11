"use client";
import { Line, LineChart, CartesianGrid, XAxis, LabelList } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import { type Results } from "types/game";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { AlarmClock, CircleSlash, Target } from "lucide-react";
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

const charts = [
  {
    key: "wpm",
    label: "WPM",
    color: "hsl(var(--chart-1))",
    icon: <AlarmClock size={16} className="mr-2" />,
  },
  {
    key: "accuracy",
    label: "Accuracy",
    color: "hsl(var(--chart-2))",
    icon: <Target size={16} className="mr-2" />,
  },
  {
    key: "mistakes",
    label: "Mistakes",
    color: "hsl(var(--chart-3))",
    icon: <CircleSlash size={16} className="mr-2" />,
  },
];

export default function ResultsChart({ results }: { results: Results }) {
  const [activeChart, setActiveChart] =
    useState<keyof typeof chartConfig>("wpm");
  const t = useTranslations("ResultsChart");

  return (
    <>
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
      <ChartContainer config={chartConfig} className="h-[300px] w-full">
        <LineChart
          accessibilityLayer
          data={results.resultsGraph}
          margin={{
            left: 12,
            right: 12,
            top: 24,
            bottom: 24,
          }}
          maxBarSize={32}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="number"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={32}
          />
          <ChartTooltip content={<></>} />
          <Line
            dataKey={activeChart}
            type="natural"
            stroke={`var(--color-${activeChart})`}
            strokeWidth={2}
            dot={{
              fill: `var(--color-${activeChart})`,
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Line>
        </LineChart>
      </ChartContainer>
    </>
  );
}
