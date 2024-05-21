"use server";
import { and, eq } from "drizzle-orm";
import { db } from "~/server/db";
import { favorites } from "~/server/db/schema";

export async function addQuoteToFavorites(quoteId: number, userId: string) {
  if (!quoteId || !userId) {
    console.log("Quote ID or User ID is missing");
    return;
  }

  // Check if the quote is already in the user's favorites
  const exists = await db
    .select()
    .from(favorites)
    .where(and(eq(favorites.quote_id, quoteId), eq(favorites.user_id, userId)));

  if (exists.length > 0) {
    console.log("Quote already in favorites");
    return;
  }

  await db.insert(favorites).values({
    quote_id: quoteId,
    user_id: userId,
  });
}
