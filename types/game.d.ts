import { type MutableRefObject } from "react";
import { type PerspectiveCamera, type Camera } from "three";
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
  handleRestartGame: () => void;
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
  curveRef: MutableRefObject<CatmullRomCurve3 | null>;
  textRef: MutableRefObject<Text | null>;
  cameraRef: MutableRefObject<PerspectiveCamera | null>;
  hasStartedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
