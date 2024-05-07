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
  return db.select().from(quotes).where(eq(quotes.id, id));
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
