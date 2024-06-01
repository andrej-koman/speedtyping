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
  lengthWord: "short" | "medium" | "long" | "very_long";
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
