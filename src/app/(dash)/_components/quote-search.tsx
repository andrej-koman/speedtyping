/* eslint-disable @typescript-eslint/unbound-method */
"use client";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "~/components/ui/input";
import SearchFilters from "./search-filters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { isSearchBy } from "~/lib/types";

import { useDebouncedCallback } from "use-debounce";

export default function QuoteSearch({ showClearDefault = false }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchByDefault = searchParams.get("searchBy");

  const [searchBy, setSearchBy] = useState<SearchBy>(
    searchByDefault && isSearchBy(searchByDefault) ? searchByDefault : "Text",
  );

  const [showClear, setShowClear] = useState<boolean>(showClearDefault);

  const handleSearchByChange = (value: string) => {
    setSearchBy(value as SearchBy);
    // Get the query from the searchParams
    const query = searchParams.get("query");

    if (query) {
      handleSearch(query);
    }
  };

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === "" || !value) {
      params.delete("query");
      params.delete("searchBy");
      replace(`${pathname}?${params.toString()}`);
      setShowClear(false);
      return;
    }

    params.set("query", value);
    params.set("searchBy", searchBy);

    setShowClear(true);

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleClearSearch = () => {
    setShowClear(false);
    // TODO
    // Add the search query to a variable, so u can clear it here
    // Think of a way to save recently searched
    //
    replace(`${pathname}`);
  };

  return (
    <div className="flex flex-row justify-between">
      <div></div>
      <div className="flex w-[40%] flex-row space-x-2">
        <SearchFilters
          searchBy={searchBy}
          handleSearchByChange={handleSearchByChange}
        />
        <div className="relative w-full">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            placeholder="Search for a quote"
            className="pl-8"
            defaultValue={searchParams.get("query")?.toString()}
          />
          {showClear && (
            <button
              onClick={handleClearSearch}
              className="absolute right-2 top-2.5"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
