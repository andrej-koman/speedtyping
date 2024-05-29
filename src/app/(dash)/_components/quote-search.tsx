/* eslint-disable @typescript-eslint/unbound-method */
"use client";
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "~/components/ui/input";
import SearchFilters from "./search-filters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";
import { cn, updateRecentSearches } from "~/lib/utils";

export default function QuoteSearch({
  showClearDefault = false,
  queryDefault = "",
  searchByDefault = "",
}) {
  const searchParams = useSearchParams();

  const [showClear, setShowClear] = useState<boolean>(showClearDefault);
  const [showCommand, setShowCommand] = useState<boolean>(false);

  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const { replace, refresh } = useRouter();
  const pathname = usePathname();

  const handleSearchByChange = (value: string) => {
    search(null, value as SearchBy);
  };

  const handleSearchChange = useDebouncedCallback((value: string) => {
    // Hide set show clear
    if (value === "") {
      setShowClear(false);
    }

    search(value, null);
  }, 300);

  const search = (query: string | null, searchBy: SearchBy | null) => {
    const params = new URLSearchParams(searchParams);
    if (query === null && searchBy === null) {
      throw new Error("This should not happen...");
    }

    if (query === null && searchBy !== null) {
      // Update the searchBy and refresh
      params.set("searchBy", searchBy);
    } else if (searchBy === null && query !== null) {
      if (query === "" || !query) {
        params.delete("query");
        params.delete("searchBy");
      } else {
        params.set("query", query);
        setShowClear(true);
      }
    }

    if (query !== null && query !== "") {
      const updatedSearches = updateRecentSearches(recentSearches, query);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    }

    replace(`${pathname}?${params.toString()}`);
    refresh();
  };

  const handleClearSearch = () => {
    setShowClear(false);
    replace(`${pathname}`);
    refresh();
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
            defaultValue={queryDefault}
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

            {recentSearches.map((element: string, index: number) => {
              return (
                <button
                  className="flex w-full justify-between truncate rounded p-1 hover:bg-secondary"
                  key={index}
                  onClick={() => {
                    const params = new URLSearchParams(searchParams);
                    params.set("query", element);

                    replace(`${pathname}?${params.toString()}`);
                    refresh();
                  }}
                >
                  <span>{element}</span>
                </button>
              );
            })}
          </div>
        </div>
        <SearchFilters
          searchBy={searchByDefault as SearchBy}
          handleSearchByChange={handleSearchByChange}
        />
      </div>
    </div>
  );
}
