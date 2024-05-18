import { getFilteredQuotes } from "~/server/queries";
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
  if (searchParams) {
    if (searchParams.query && searchParams.searchBy) {
      quotes = await getFilteredQuotes(
        searchParams.query,
        searchParams.searchBy as SearchBy,
        1,
      );
    }
  }
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex h-[calc(100vh-3.6rem)] w-[40vw] flex-col space-y-3 p-5">
        <QuoteSearch />
        <Separator orientation="horizontal" />
        <QuoteList quotes={quotes} />
      </div>
    </div>
  );
}
