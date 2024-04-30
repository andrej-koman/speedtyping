import { type MutableRefObject } from "react";

/**
 * Game settings
 */
declare interface GameSettings {
  has3D: MutableRefObject<boolean>;
  textSize: MutableRefObject<string>;
}
