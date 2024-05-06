"use client";
import {
  createContext,
  type MutableRefObject,
  useContext,
  useState,
} from "react";
import { Camera } from "three";
import {
  type Object3DEventMap,
  type Group,
  type CatmullRomCurve3,
} from "three";

type GameContextType = {
  carRef: MutableRefObject<Group<Object3DEventMap> | null>;
  curveRef: MutableRefObject<CatmullRomCurve3 | null>;
  textRef: MutableRefObject<Text | null>;
  cameraRef: MutableRefObject<Camera | null>;
  hasStartedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

// Create a new context with an undefined initial value
const GameContext = createContext<GameContextType>({} as GameContextType);

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

  return (
    <GameContext.Provider
      value={{
        carRef: { current: null },
        curveRef: { current: null },
        textRef: { current: null },
        cameraRef: { current: new Camera() },
        hasStartedState: hasStarted,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
