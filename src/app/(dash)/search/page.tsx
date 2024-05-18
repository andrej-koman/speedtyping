import { getQuotes } from "~/server/queries";
import QuoteList from "../_components/quote-list";
import { Separator } from "~/components/ui/separator";
import QuoteSearch from "../_components/quote-search";

export default async function SearchPage() {
  const quotes = await getQuotes();
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
