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
  if (searchParams) {
    if (searchParams.query && searchParams.searchBy) {
      quotes = await getFilteredQuotes(
        searchParams.query,
        searchParams.searchBy as SearchBy,
        1,
      );

      // TODO - Nekak to zrihtaj, načeloma se tak nerabi na tem pagu prikazovat
      // Načeloma bom si debug shit pripravo, do te pa pustim tak kot je
      // nvim-dap
      /*
      quotes = result.map((res) => {
        const isFavorite = res.favorites !== undefined;
        const quote = res.quotes;
        quote.isFavorite = isFavorite;
        debugger;
        return quote;
      });
      */

      quoteCount = await countFilteredQuotes(
        searchParams.query,
        searchParams.searchBy as SearchBy,
      );
    }
  }
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex h-[calc(100vh-3.6rem)] flex-col space-y-6 p-5 lg:w-full xl:w-[40vw]">
        <QuoteSearch />
        <QuoteList quotes={quotes} quoteCount={quoteCount} />
      </div>
    </div>
  );
}
