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
declare interface Stats {
  id: number;
  user_id: string;
  xp: number;
  total_started: number;
  total_finished: number;
  created_at: Date;
}

/**
 *  This represents stats with calculated fields
 */
declare interface StatsWithCalculatedFields extends Stats {
  level: number;
  progress: number;
}
