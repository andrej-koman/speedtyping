"use client";
import { createContext, useContext, useRef } from "react";
import { type GameSettings } from "types/game";

// Create a new context with an undefined initial value
const GameSettingsContext = createContext<GameSettings>({
  has3D: { current: false },
  textSize: { current: "2xl" },
});

// Create a custom hook to use the context
export function useGameSettings() {
  const context = useContext(GameSettingsContext);
  if (context === undefined) {
    throw new Error("useCar must be used within a CarProvider");
  }
  return context;
}

// Create a provider component
export function GameSettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const has3D = useRef(true);
  const textSize = useRef("2xl");
  return (
    <GameSettingsContext.Provider
      value={{
        has3D: has3D,
        textSize: textSize,
      }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
}
