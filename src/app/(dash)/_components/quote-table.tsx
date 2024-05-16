import { Input } from "~/components/ui/input";
import { Search } from "lucide-react";

export default function QuoteTable({ quotes }: { quotes: Quote[] }) {
  return (
    <div className="flex w-[650px] flex-col space-y-4 p-5">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search for a quote" className="pl-8" />
      </div>
      <div className="flex flex-col space-y-4">
        {quotes.map((quote) => (
          <div key={quote.id} className="flex flex-col space-y-2">
            <div className="flex flex-row justify-between">
              <p className="text-lg font-semibold">{quote.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
