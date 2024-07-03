declare module "tailwindcss/lib/util/flattenColorPalette";

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
  lengthWord: string;
  isFavorite?: boolean;
}

/**
 * This represents a single favorite object
 */

declare interface Favorite {
  id: number;
  quote_id: number;
  user_id: string;
  created_at: Date;
}

/**
 * This represents a single stats object
 */
declare interface PlayerStats {
  id: number;
  user_id: string;
  xp: number;
  total_plays: number;
  created_at: Date;
}

/**
 *  This represents stats with calculated fields
 */
declare interface StatsWithCalculatedFields extends PlayerStats {
  level: number;
  progress: number;
}

/**
 * This represents a single play object
 */
declare interface Play {
  id: number;
  user_id: string;
  quote_id: number;
  mistakes: number;
  characters: number;
  words: number;
  time: number;
  viewed: boolean;
  created_at: Date;
}
