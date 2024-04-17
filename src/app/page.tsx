import { getQuotes } from "~/server/queries";

export default async function HomePage() {
  const quotes = await getQuotes();

  return (
    <main className="flex justify-center items-center">
      {quotes.map((quote) => (
        <div key={quote.id} className="p-4">
          <p>{quote.text}</p>
          <p className="text-sm text-gray-500">- {quote.author}</p>
        </div>
      ))}
    </main>
  );
}