"use client";
import { createContext, useContext, useState, useRef, useMemo } from "react";
import { Quaternion, Vector3, Euler } from "three";
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
  const carStartPositionRef = useRef<Vector3>(new Vector3(0, 0, 0));
  const carStartRotationRef = useRef<Euler>(new Euler(0, 0, 0));
  const targetQuaternionRef = useRef(new Quaternion());
  const tRef = useRef(0);
  const curveRef = useRef(null);
  const textRef = useRef(null);

  // This gets cached, so that is does not get reset on every render
  const contextValue = useMemo(
    () => ({
      carRef,
      carStartPositionRef,
      carStartRotationRef,
      targetQuaternionRef,
      tRef,
      curveRef,
      textRef,
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
