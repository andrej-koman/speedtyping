/* eslint-disable @typescript-eslint/unbound-method */
"use client";
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "~/components/ui/input";
import SearchFilters from "./search-filters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";
import { updateRecentSearches } from "~/lib/utils";

export default function QuoteSearch({
  queryDefault = "",
  searchByDefault = "Text",
}: {
  queryDefault: string;
  searchByDefault: SearchBy;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [showClear, setShowClear] = useState<boolean>(queryDefault !== "");
  const [showCommand, setShowCommand] = useState<boolean>(false);

  const [query, setQuery] = useState<string>(queryDefault);
  const [searchBy, setSearchBy] = useState<SearchBy>(searchByDefault);

  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const { replace } = useRouter();

  const handleSearchByChange = (value: string) => {
    setSearchBy(value as SearchBy);
    search();
  };

  // Lowkey probaj tu not stvari spreminjat
  const handleSearchChange = (value: string) => {
    // Hide set show clear
    if (value === "") {
      setShowClear(false);
    }

    setQuery(value);
    search();
  };

  const search = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams);
    if (query === null && searchBy === null) {
      throw new Error("This should not happen...");
    }

    if (query === "" || !query) {
      params.delete("query");
      setShowClear(false);
    } else {
      params.set("query", query);
      setShowClear(true);
    }

    params.set("searchBy", searchBy);

    if (query !== null && query !== "") {
      const updatedSearches = updateRecentSearches(recentSearches, query);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      setRecentSearches(updatedSearches);
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const handleClearSearch = () => {
    setShowClear(false);
    setQuery("");
    search();
  };

  useEffect(() => {
    // Get the recent searches from local storage
    setRecentSearches(
      JSON.parse(localStorage.getItem("recentSearches") ?? "[]") as string[],
    );
  }, [searchParams]);

  return (
    <div className="flex flex-row justify-center ps-1">
      <div className="flex w-[40%] flex-row space-x-2">
        <div className="relative w-full">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            onChange={(e) => {
              handleSearchChange(e.target.value);
            }}
            value={query}
            placeholder="Search"
            className="pl-8 focus:rounded-b-none focus:outline-none"
            onFocus={() => {
              setShowCommand(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setShowCommand(false);
              }, 100);
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

          {showCommand && (
            <div className="command-list transition-display absolute z-50 w-full space-y-2 rounded-b-sm border border-t-0 p-2 text-sm">
              <span className="text-muted-foreground">Recent searches</span>
              {recentSearches.map((element: string, index: number) => {
                return (
                  <button
                    className="flex w-full justify-between truncate rounded p-1 hover:bg-secondary"
                    key={index}
                    onClick={() => {
                      handleSearchChange(element);
                    }}
                  >
                    <span>{element}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <SearchFilters
          searchBy={searchBy}
          handleSearchByChange={handleSearchByChange}
        />
      </div>
    </div>
  );
}
