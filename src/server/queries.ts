import { eq, like, sql } from "drizzle-orm";
import { db } from "./db";
import { quotes } from "./db/schema";

export async function getQuotes() {
  const quotes = await db.query.quotes.findMany({
    orderBy: (model, { desc }) => desc(model.created_at),
  });

  return quotes;
}

export async function getFilteredQuotes(
  query: string,
  searchBy: SearchBy,
  page: number,
) {
  let equals = null;
  switch (searchBy) {
    case "Text":
      equals = quotes.text;
      break;
    case "Author":
      equals = quotes.author;
      break;
    case "Source":
      equals = quotes.source;
      break;
    default:
      equals = quotes.text;
      break;
  }

  const allQuotes = await db
    .select()
    .from(quotes)
    .where(sql`${equals} LIKE ${`%${query}%`}`);

  return allQuotes;
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
