"use client";
import { createContext, useContext, useState, useRef, useMemo } from "react";
import { type Game } from "types/game";

// Create a new context with an undefined initial value
const GameContext = createContext<Game>({} as Game);

// Create a custom hook to use the context
export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useCar must be used within a CarProvider");
  }
  return context;
}

// Create a provider component
export function GameProvider({ children }: { children: React.ReactNode }) {
  const hasStarted = useState(false);
  const carRef = useRef(null);
  const curveRef = useRef(null);
  const textRef = useRef(null);
  const cameraRef = useRef(null);

  // This gets cached, so that is does not get reset on every render
  const contextValue = useMemo(
    () => ({
      carRef,
      curveRef,
      textRef,
      cameraRef,
    }),
    [],
  );

  return (
    <GameContext.Provider
      value={{
        ...contextValue,
        hasStartedState: hasStarted,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
