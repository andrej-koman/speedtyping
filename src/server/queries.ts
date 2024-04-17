import { db } from "./db";

export async function getQuotes() {
  const quotes = await db.query.quotes.findMany({
    orderBy: (model, { desc }) => desc(model.created_at),
  });
  
  return quotes;
}
