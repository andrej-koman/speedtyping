"use server";
import { and, eq } from "drizzle-orm";
import { db } from "~/server/db";
import { favorites, plays } from "~/server/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { type PlayStats } from "types/game";

/**
 *  Add a Quote to favorites
 */
export async function addQuoteToFavorites(quoteId: number) {
  const user = await currentUser();

  if (!user) {
    return {
      status: "error",
      message: "User not found",
    };
  }

  const userId = user.id;

  if (!quoteId || !userId) {
    return {
      status: "error",
      message: "Quote id or user id are missing.",
    };
  }

  // Check if the quote is already in the user's favorites
  const exists = await checkIfFavoriteExists(quoteId);
  if (exists.length > 0) {
    return {
      status: "error",
      message: "Quote already in favorites",
    };
  }

  return await db
    .insert(favorites)
    .values({
      quote_id: quoteId,
      user_id: userId,
    })
    .then(() => {
      return {
        status: "success",
        message: "Quote added to favorites",
      };
    });
}

/**
 *  Remove a quote from favorites
 */
export async function removeQuoteFromFavorites(quoteId: number) {
  const user = await currentUser();
  if (!user) {
    return {
      status: "error",
      message: "User not found",
    };
  }
  const userId = user.id;

  if (!quoteId) {
    return {
      status: "error",
      message: "Quote id or user id are missing.",
    };
  }

  // Check if the quote is already in the user's favorites
  const exists = await checkIfFavoriteExists(quoteId);
  if (exists.length == 0) {
    return {
      status: "error",
      message: "Quote is not favorited",
    };
  }

  return db
    .delete(favorites)
    .where(and(eq(favorites.quote_id, quoteId), eq(favorites.user_id, userId)))
    .then(() => {
      return {
        status: "success",
        message: "Quote has been removed from favorites",
      };
    });
}

/**
 *  Save play stats to the database
 *
 *  Return a promise with the id of the saved play
 */
export async function savePlayStats(stats: PlayStats, quoteId: number) {
  const user = await currentUser();
  if (!stats || !user) {
    return Promise.reject("Stats are missing.");
  }
  const userId = user.id;

  // Make the time a decimal with 2 decimal places
  stats.time = parseFloat(stats.time.toFixed(2));

  const result = await db
    .insert(plays)
    .values({
      ...stats,
      quote_id: quoteId,
      user_id: userId,
    })
    .returning({
      insertedId: plays.id,
    });

  if (!result[0]) {
    return Promise.reject("Error saving play stats");
  }

  return result[0].insertedId;
}

// Helper functions
async function checkIfFavoriteExists(quoteId: number) {
  const user = await currentUser();
  if (!user) {
    return [];
  }
  const userId = user.id;

  return await db
    .select()
    .from(favorites)
    .where(and(eq(favorites.quote_id, quoteId), eq(favorites.user_id, userId)));
}
