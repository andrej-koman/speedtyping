"use server";
import { and, eq } from "drizzle-orm";
import { db } from "~/server/db";
import { favorites } from "~/server/db/schema";

/**
 *  Add a Quote to favorites
 */
export async function addQuoteToFavorites(quoteId: number, userId: string) {
  if (!quoteId || !userId) {
    return {
      status: "error",
      message: "Quote id or user id are missing.",
    };
  }

  // Check if the quote is already in the user's favorites
  const exists = await checkIfFavoriteExists(quoteId, userId);
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
export async function removeQuoteFromFavorites(
  quoteId: number,
  userId: string,
) {
  if (!quoteId || !userId) {
    return {
      status: "error",
      message: "Quote id or user id are missing.",
    };
  }

  // Check if the quote is already in the user's favorites
  const exists = await checkIfFavoriteExists(quoteId, userId);
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

// Helper functions
async function checkIfFavoriteExists(quoteId: number, userId: string) {
  return await db
    .select()
    .from(favorites)
    .where(and(eq(favorites.quote_id, quoteId), eq(favorites.user_id, userId)));
}
