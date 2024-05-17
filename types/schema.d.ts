declare module "tailwindcss/lib/util/flattenColorPalette";

/**
 * This object is created and should only be used in the Game component. It represents the state of the game.
 */
declare interface GameProps {
  text: string;
  words: string[];
  currentWord: string;
  typing: string;
  hasStarted: boolean;
  hasEnded?: boolean;
  time: number;
  wpm: number;
}

/**
 *  This represents a single quote object.
 */

declare interface Quote {
  text: string;
  id: number;
  source: string;
  type: string;
  author: string;
  created_at: Date;
  updated_at: Date;
  lengthWord: "short" | "medium" | "long" | "very_long";
}
