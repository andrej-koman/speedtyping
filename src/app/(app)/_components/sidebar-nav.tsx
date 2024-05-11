"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "~/components/ui/button";
import SearchIcon from "~/icons/search-icon";

import { cn } from "~/lib/utils";

export default function SidebarNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      <Link
        href="/play"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          pathname === "/play"
            ? "bg-primary hover:bg-muted"
            : "hover:bg-transparent hover:underline",
          "justify-start",
        )}
      >
        <SearchIcon className="h-6 w-6 mr-2" />
        Search
      </Link>
    </nav>
  );
}
