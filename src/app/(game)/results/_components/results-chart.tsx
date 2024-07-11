"use client";
import { Line, LineChart, CartesianGrid, XAxis, LabelList } from "recharts";
import { ChartContainer, ChartTooltip } from "~/components/ui/chart";
import { type Results } from "types/game";
import { useState } from "react";

export default function ResultsChart({
  results,
  activeChart,
  chartConfig,
}: {
  results: Results;
  activeChart: "wpm" | "accuracy" | "mistakes";
  chartConfig: Record<string, { label: string; color: string }>;
}) {
  return (
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
  );
}
