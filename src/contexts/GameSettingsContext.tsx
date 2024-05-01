"use client";
import { createContext, useContext, useRef } from "react";
import { type GameSettings } from "types/game";
import { getSettingsFromLocalStorage } from "~/lib/game-settings";

const settings = getSettingsFromLocalStorage();
const has3D = settings.get("has3D") ? Boolean(settings.get("has3D")) : true;
const textSize = settings.get("textSize") ?? "2xl";

// Create a new context with an undefined initial value
const GameSettingsContext = createContext<GameSettings>({
  has3D: { current: has3D },
  textSize: { current: textSize },
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
  const has3DRef = useRef(has3D);
  const textSizeRef = useRef(textSize);

  return (
    <GameSettingsContext.Provider
      value={{
        has3D: has3DRef,
        textSize: textSizeRef,
      }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
}
