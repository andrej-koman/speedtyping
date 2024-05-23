import { type MutableRefObject } from "react";

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
  show3D: boolean;
  textSize: string;
  quote?: Quote;
}
