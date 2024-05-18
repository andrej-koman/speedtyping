"use client";
import { Search } from "lucide-react";
import { Input } from "~/components/ui/input";

export default function QuoteSearch() {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        onInput={() => {
          console.log("searching...");
        }}
        placeholder="Search for a quote"
        className="pl-8"
      />
    </div>
  );
}
