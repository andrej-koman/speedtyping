"use client";
import {
  createContext,
  type MutableRefObject,
  useContext,
  useState,
  useRef,
  useMemo,
} from "react";
import { type Camera } from "three";
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
  const carRef = useRef(null);
  const curveRef = useRef(null);
  const textRef = useRef(null);
  const cameraRef = useRef(null);

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
