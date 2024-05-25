"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "~/components/ui/button";
import { Clock, Heart, type LucideProps, Search } from "lucide-react";

import { cn } from "~/lib/utils";

function NavItem({
  href,
  children,
  Icon,
}: {
  href: string;
  children: React.ReactNode;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "link" }),
        pathname === href ? "bg-muted hover:bg-muted" : "",
        "h-12 justify-between text-2xl text-foreground",
      )}
    >
      {children}
      <Icon className="h-5 w-5" />
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
        "flex h-max w-[20rem] space-x-2 p-6 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      <NavItem href="/search" Icon={Search}>
        Search
      </NavItem>
      <NavItem href="/favorites" Icon={Heart}>
        Favorites
      </NavItem>
      <NavItem href="/recent" Icon={Clock}>
        Recently played
      </NavItem>
    </nav>
  );
}
