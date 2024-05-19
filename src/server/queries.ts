import { eq, sql, count } from "drizzle-orm";
import { db } from "./db";
import { quotes } from "./db/schema";
import { convertSearchBy } from "~/lib/utils";

/**
 * Get all the quotes from the db
 * @returns {Promise<Quote[]>} - An array of quotes
 */
export async function getQuotes(): Promise<Quote[]> {
  const quotes = await db.query.quotes.findMany({
    orderBy: (model, { desc }) => desc(model.created_at),
  });

  return quotes;
}

/**
 * Filter quotes by a query and a searchBy parameter and return them.
 * @param query
 * @param searchBy
 * @param page
 * @returns {Promise<Quote[]>}
 */
export async function getFilteredQuotes(
  query: string,
  searchBy: SearchBy,
  page: number,
  pageSize = 10,
): Promise<Quote[]> {
  const equals = convertSearchBy(searchBy);

  const offset = (page - 1) * pageSize;

  const allQuotes = await db
    .select()
    .from(quotes)
    .where(sql`LOWER(${equals}) LIKE LOWER(${`%${query}%`})`)
    .limit(pageSize)
    .offset(offset);

  return allQuotes;
}

/**
 * Count quotes by a query and a searchBy parameter and return the count.
 * @param query
 * @param searchBy
 * @returns {Promise<number>}
 */
export async function countFilteredQuotes(
  query: string,
  searchBy: SearchBy,
): Promise<number> {
  const equals = convertSearchBy(searchBy);

  const quotesCount = await db
    .select({ count: count() })
    .from(quotes)
    .where(sql`LOWER(${equals}) LIKE LOWER(${`%${query}%`})`);

  if (quotesCount[0] === undefined) {
    throw new Error("No quotes found");
  }

  return quotesCount[0].count;
}

/**
 *  Get a quote by its id
 * @param id
 * @returns  {Promise<Quote>}
 */
export async function getQuoteById(id: number): Promise<Quote> {
  // Check if a quote with that id exists
  const quote = await db
    .select()
    .from(quotes)
    .where(eq(quotes.id, id))
    .limit(1);

  if (quote[0] === undefined) {
    throw new Error("Quote not found");
  }

  return quote[0];
}

/**
 * Get a random quote
 * @returns {Promise<Quote[]>}
 */
export async function getRandomQuote(): Promise<Quote[]> {
  // Get number of quotes
  const numQuotes = (await db.query.quotes.findMany()).length;

  const randomIndex = Math.floor(Math.random() * numQuotes);
  // Get random index

  return db
    .select()
    .from(quotes)
    .where(eq(quotes.id, randomIndex + 1));
}
