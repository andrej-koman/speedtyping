import { type MutableRefObject } from "react";
import { type Vector3, type Euler } from "three";
import {
  type Object3DEventMap,
  type Group,
  type CatmullRomCurve3,
} from "three";

/**
 * Game settings
 */
declare interface GameSettings {
  has3D: MutableRefObject<boolean>;
  textSize: MutableRefObject<string>;
}

/**
 *  Options props
 *
 */
declare interface OptionsProps {
  handle3DChange: (pressed: boolean) => void;
  handleTextSizeChange: (value: string) => void;
  setHasStarted: React.Dispatch<React.SetStateAction<boolean>>;
  show3D: boolean;
  textSize: string;
  quote?: Quote;
  hasStarted: boolean;
}

/**
 * Game type
 *
 */
declare interface Game {
  carRef: MutableRefObject<Group<Object3DEventMap> | null>;
  carStartPositionRef: MutableRefObject<Vector3 | null>;
  carStartRotationRef: MutableRefObject<Euler | null>;
  currentWordIndexRef: MutableRefObject<number>;
  currentLetterIndexRef: MutableRefObject<number>;
  targetQuaternionRef: MutableRefObject<Quaternion>;
  tRef: MutableRefObject<number>;
  curveRef: MutableRefObject<CatmullRomCurve3 | null>;
  textRef: MutableRefObject<Text | null>;
  hasStartedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

/**
 *  Raw statistics type, before it is processed and displayed
 */
declare interface PlayStats {
  time: number;
  characters: number;
  words: number;
  mistakes: number;
}

/**
 *  Results object
 *
 */
declare interface Results {
  play: Play;
  quote: Quote;
  wpm: number;
  accuracy: number;
  gainedXp?: number;
  targetXp?: number;
  targetLevel?: number;
  targetProgress?: number;
}
