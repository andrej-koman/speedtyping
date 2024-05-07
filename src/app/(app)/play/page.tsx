import { getQuotes } from "~/server/queries";
import QuoteTable from "./_components/quote-table";

export default async function PlayPage() {
  // TODO - Please add a DataTable instead of normal table
  const quotes = await getQuotes();
  return (
    <div className="flex h-[calc(100vh-3.6rem)] w-screen flex-col items-center justify-center p-0">
      <QuoteTable quotes={quotes} />
    </div>
  );
}
