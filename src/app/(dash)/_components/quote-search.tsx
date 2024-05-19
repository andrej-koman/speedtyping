/* eslint-disable @typescript-eslint/unbound-method */
"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "~/components/ui/input";
import SearchFilters from "./search-filters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { isSearchBy } from "~/lib/types";

import { useDebouncedCallback } from "use-debounce";

export default function QuoteSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchByDefault = searchParams.get("searchBy");

  const [searchBy, setSearchBy] = useState<SearchBy>(
    searchByDefault && isSearchBy(searchByDefault) ? searchByDefault : "Text",
  );

  const handleSearchByChange = (value: string) => {
    setSearchBy(value as SearchBy);
  };

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === "" || !value) {
      params.delete("query");
      params.delete("searchBy");
      replace(`${pathname}?${params.toString()}`);
      return;
    }

    params.set("query", value);
    params.set("searchBy", searchBy);

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <>
      <SearchFilters
        searchBy={searchBy}
        handleSearchByChange={handleSearchByChange}
      />
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          placeholder="Search for a quote"
          className="pl-8"
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </>
  );
}
