/* eslint-disable @typescript-eslint/unbound-method */
"use client";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "~/components/ui/input";
import SearchFilters from "./search-filters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { isSearchBy } from "~/lib/types";

import { useDebouncedCallback } from "use-debounce";
import { cn } from "~/lib/utils";

export default function QuoteSearch({ showClearDefault = false }) {
  const searchParams = useSearchParams();
  const searchByDefault = searchParams.get("searchBy");

  const [searchBy, setSearchBy] = useState<SearchBy>(
    searchByDefault && isSearchBy(searchByDefault) ? searchByDefault : "Text",
  );
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get("query")?.toString() ?? "",
  );
  const [showClear, setShowClear] = useState<boolean>(showClearDefault);
  const [showCommand, setShowCommand] = useState<boolean>(false);
  /*
  const recentSearches: string[] = JSON.parse(
    localStorage.getItem("recentSearches") ?? "[]",
  ) as unknown as string[];
*/
  const recentSearches = ["france pre", "bojh", "testiram ta funkcuiona"];

  const { replace } = useRouter();
  const pathname = usePathname();

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
    setSearchQuery("");
    replace(`${pathname}`);
  };

  return (
    <div className="flex flex-row justify-center ps-1">
      <div className="flex w-[40%] flex-row space-x-2">
        <div className="relative w-full">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
            }}
            value={searchQuery}
            placeholder="Search"
            className="pl-8 focus:rounded-b-none focus:outline-none"
            onFocus={() => {
              setShowCommand(true);
            }}
            onBlur={() => {
              setShowCommand(false);
            }}
          />
          {showClear && (
            <button
              onClick={handleClearSearch}
              className="absolute right-2 top-2.5"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}

          <div
            className={cn(
              "command-list absolute z-50 w-full space-y-2 rounded-b-sm border border-t-0 p-2 text-sm transition-opacity",
              showCommand ? "" : "opacity-0",
            )}
          >
            <span className="text-muted-foreground">Recent searches</span>
            {recentSearches.map((element, index) => {
              return (
                <div className="flex w-full justify-between" key={index}>
                  <button>
                    <span>{element}</span>
                  </button>
                  <button>
                    <X className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <SearchFilters
          searchBy={searchBy}
          handleSearchByChange={handleSearchByChange}
        />
      </div>
    </div>
  );
}
