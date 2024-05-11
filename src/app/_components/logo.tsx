/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { cn } from "~/lib/utils";

export default function Logo({
  href = "/",
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link className="flex select-none items-center space-x-1" href={href}>
      <img src="/logo.png" alt="logo" className={cn("h-8", className)} />
    </Link>
  );
}
