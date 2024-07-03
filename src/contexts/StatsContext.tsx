"use client";
import { createContext, useContext, useState } from "react";

type StatsContextType = {
  stats: StatsWithCalculatedFields;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  clearText: () => void;
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
  const [text, setText] = useState("");

  return (
    <StatsContext.Provider
      value={{
        stats,
        level,
        setLevel,
        progress,
        setProgress,
        text,
        setText,
        clearText: () => setText(""),
      }}
    >
      {children}
    </StatsContext.Provider>
  );
}
