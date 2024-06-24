"use client";
import { createContext, useContext, useState } from "react";

type StatsContextType = {
  stats: Stats;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
};

const StatsContext = createContext<StatsContextType | undefined>(undefined);

export function useStats() {
  const context = useContext(StatsContext);
  if (context === undefined) {
    throw new Error("useStats must be used within its provider");
  }

  return context;
}

export function StatsProvider({
  children,
  stats,
}: {
  children: React.ReactNode;
  stats: StatsWithCalculatedFields;
}) {
  const [level, setLevel] = useState(stats.level);
  const [progress, setProgress] = useState(stats.progress);

  return (
    <StatsContext.Provider
      value={{
        stats,
        level,
        setLevel,
        progress,
        setProgress,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
}
