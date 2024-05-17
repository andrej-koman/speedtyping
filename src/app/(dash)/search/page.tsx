import { getQuotes } from "~/server/queries";
import QuoteList from "../_components/quote-list";
import { Input } from "~/components/ui/input";
import { Search } from "lucide-react";

export default async function SearchPage() {
  const quotes = await getQuotes();
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex w-[40vw] flex-col space-y-4 p-5">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search for a quote" className="pl-8" />
        </div>
        <QuoteList quotes={quotes} />
      </div>
    </div>
  );
}
