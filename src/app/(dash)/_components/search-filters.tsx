import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
} from "~/components/ui/dropdown-menu";

import { TextSearch } from "lucide-react";

export default function SearchFilters({
  searchBy,
  handleSearchByChange,
}: {
  searchBy: SearchBy;
  handleSearchByChange: (value: string) => void;
}) {
  return (
    <div className="flex w-full space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline">
            <TextSearch className="mr-2 h-5 w-5" />
            {searchBy}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Search By</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={searchBy}
            onValueChange={handleSearchByChange}
          >
            <DropdownMenuRadioItem value="Text">Text</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Author">Author</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Source">Source</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
