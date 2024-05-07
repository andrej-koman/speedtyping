import { eq } from "drizzle-orm";
import { db } from "./db";
import { quotes } from "./db/schema";

export async function getQuotes() {
  const quotes = await db.query.quotes.findMany({
    orderBy: (model, { desc }) => desc(model.created_at),
  });

  return quotes;
}

export async function getQuoteById(id: number) {
  // Check if a quote with that id exists
  const quote = await db
    .select()
    .from(quotes)
    .where(eq(quotes.id, id))
    .limit(1);

  if (!quote) {
    throw new Error("Quote not found");
  }

  return quote[0];
}

export async function getRandomQuote() {
  // Get number of quotes
  const numQuotes = (await db.query.quotes.findMany()).length;

  const randomIndex = Math.floor(Math.random() * numQuotes);
  // Get random index

  return db
    .select()
    .from(quotes)
    .where(eq(quotes.id, randomIndex + 1));
}
