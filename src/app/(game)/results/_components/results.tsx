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
    <>
      <ResultsChart results={results} />
      <h1>Play Results</h1>
      <p>Mistakes: {results.play.mistakes}</p>
      <p>Time: {results.play.time}</p>
      <p>Characters: {results.play.characters}</p>
      <p>Words: {results.play.words}</p>
      <p>Wpm: {results.play.wpm}</p>
      <p>Accuracy: {results.play.accuracy}</p>
    </>
  );
}
