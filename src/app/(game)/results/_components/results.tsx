"use client";
import { useEffect } from "react";
import { useStats } from "~/contexts/StatsContext";
import { type Results } from "types/game";
import ResultsChart from "./results-chart";

export default function Results({ results }: { results: Results }) {
  const { setProgress, setText, setLevel } = useStats();

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
      <ResultsChart results={results} />
    </div>
  );
}
