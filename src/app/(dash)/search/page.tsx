import { getFilteredQuotes, countFilteredQuotes } from "~/server/queries";
import QuoteList from "../_components/quote-list";
import QuoteSearch from "../_components/quote-search";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    query: string;
    searchBy: string;
  };
}) {
  let quotes: Quote[] = [];
  let quoteCount = 0;
  let showClear = false;
  if (searchParams) {
    if (searchParams.query && searchParams.searchBy) {
      quotes = await getFilteredQuotes(
        searchParams.query,
        searchParams.searchBy as SearchBy,
        1,
      );

      quoteCount = await countFilteredQuotes(
        searchParams.query,
        searchParams.searchBy as SearchBy,
      );

      showClear = true;
    }
  }
  return (
    <div className="flex h-full w-full">
      <div className="flex w-full flex-col space-y-6">
        <QuoteSearch showClearDefault={showClear} />
        <QuoteList quotes={quotes} quoteCount={quoteCount} />
      </div>
    </div>
  );
}
