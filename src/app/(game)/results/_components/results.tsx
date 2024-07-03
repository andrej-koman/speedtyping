"use client";
import { useEffect } from "react";
import { handleViewPlay } from "../[id]/actions";
import { useStats } from "~/contexts/StatsContext";
import { type XPAnimation } from "types/game";

export default function Results({
  play,
  xp,
}: {
  play: Play;
  xp: number | null;
}) {
  const { setProgress, setText } = useStats();

  useEffect(() => {
    if (play.viewed === false && xp) {
      // First update the wpm
      setText(`+${xp} XP`);

      // Then update the progress incrementally

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev + 1 >= xp) {
            clearInterval(interval);
            return xp;
          }
          return prev + 1;
        });
      }, 10);
    }
  }, []);

  return (
    <>
      <h1>Play Results</h1>
      <p>Mistakes: {play.mistakes}</p>
      <p>Time: {play.time}</p>
      <p>Characters: {play.characters}</p>
      <p>Words: {play.words}</p>
    </>
  );
}
