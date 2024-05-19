import { getFilteredQuotes, countFilteredQuotes } from "~/server/queries";
import QuoteList from "../_components/quote-list";
import { Separator } from "~/components/ui/separator";
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
    }
  }
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex h-[calc(100vh-3.6rem)] flex-col space-y-3 p-5 lg:w-full xl:w-[40vw]">
        <QuoteSearch />
        <Separator orientation="horizontal" />
        <div className="flex w-full justify-end">
          <small className="text-muted-foreground">{quotes.length} out of {quoteCount} shown</small>
        </div>
        <QuoteList quotes={quotes} />
      </div>
    </div>
  );
}
