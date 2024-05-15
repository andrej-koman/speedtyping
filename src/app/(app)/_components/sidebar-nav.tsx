"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type FC } from "react";
import { buttonVariants } from "~/components/ui/button";
import ClockIcon from "~/icons/clock-icon";
import HeartIcon from "~/icons/heart-icon";
import SearchIcon from "~/icons/search-icon";
import StarIcon from "~/icons/star-icon";

import { cn } from "~/lib/utils";

function NavItem({
  href,
  children,
  Icon,
}: {
  href: string;
  children: React.ReactNode;
  Icon: FC<{ className: string }>;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        pathname === href ? "bg-muted hover:bg-muted" : "",
        "justify-start text-[0.8rem]",
      )}
    >
      <Icon className="mr-2 h-5 w-5" />
      {children}
    </Link>
  );
}

export default function SidebarNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "flex h-full w-[250px] space-x-2 border-e-[1px] p-6 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      <NavItem href="/play" Icon={SearchIcon}>
        Search
      </NavItem>
      <NavItem href="/featured" Icon={StarIcon}>
        Featured
      </NavItem>
      <NavItem href="/favorites" Icon={HeartIcon}>
        Favorites
      </NavItem>
      <NavItem href="/recent" Icon={ClockIcon}>
        Recently played
      </NavItem>
    </nav>
  );
}
