"use client";
import { createContext, useContext, type MutableRefObject } from 'react';
import { Camera, type CatmullRomCurve3, type Group, type Object3DEventMap } from 'three';

type GameContextType = {
  carRef: MutableRefObject<Group<Object3DEventMap> | null>;
  curveRef: MutableRefObject<CatmullRomCurve3 | null>;
  textRef: MutableRefObject<Text | null>;
  cameraRef: MutableRefObject<Camera | null>;
};

// Create a new context with an undefined initial value
const GameContext = createContext<GameContextType>({} as GameContextType);

// Create a custom hook to use the context
export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useCar must be used within a CarProvider');
  }
  return context;
}

// Create a provider component
export function GameProvider({ children }: {
  children: React.ReactNode;
}) {
  return (
    <GameContext.Provider value={{
      carRef: { current: null },
      curveRef: { current: null },
      textRef: { current: null },
      cameraRef: { current: new Camera() },
    }}>
      {children}
    </GameContext.Provider>
  );
}