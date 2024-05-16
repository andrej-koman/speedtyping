"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "~/components/ui/button";
import { Clock, Heart, type LucideProps, Search, Star } from "lucide-react";

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
      <NavItem href="/search" Icon={Search}>
        Search
      </NavItem>
      <NavItem href="/featured" Icon={Star}>
        Featured
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
