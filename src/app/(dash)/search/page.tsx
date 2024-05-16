import { getQuotes } from "~/server/queries";
import QuoteTable from "../_components/quote-table";

export default async function SearchPage() {
  // TODO - Please add a DataTable instead of normal table
  const quotes = await getQuotes();
  return (
    <div className="flex justify-center w-full">
      <QuoteTable quotes={quotes} />
    </div>
  );
}
