"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "~/components/ui/button";
import ClockIcon from "~/icons/clock-icon";
import HeartIcon from "~/icons/heart-icon";
import SearchIcon from "~/icons/search-icon";
import StarIcon from "~/icons/star-icon";

import { cn } from "~/lib/utils";

export default function SidebarNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 w-[350px] bg-secondary h-full p-6",
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
            : "hover:bg-primary",
          "justify-start",
        )}
      >
        <SearchIcon className="mr-2 h-5 w-5" />
        Search
      </Link>
      <Link
        href="/featured"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          pathname === "/featured"
            ? "bg-primary hover:bg-muted"
            : "hover:bg-primary",
          "justify-start",
        )}
      >
        <StarIcon className="mr-2 h-5 w-5" />
        Featured
      </Link>
      <Link
        href="/favorites"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          pathname === "/favorites"
            ? "bg-primary hover:bg-muted"
            : "hover:bg-primary",
          "justify-start",
        )}
      >
        <HeartIcon className="mr-2 h-5 w-5" />
        Favorites
      </Link>
      <Link
        href="/recently-played"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          pathname === "/recently-played"
            ? "bg-primary hover:bg-muted"
            : "hover:bg-primary",
          "justify-start",
        )}
      >
        <ClockIcon className="mr-2 h-5 w-5" />
        Recently played
      </Link>
    </nav>
  );
}
