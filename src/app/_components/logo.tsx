/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { cn } from "~/lib/utils";

const sizeMap = {
  sm: {
    logoSize: "h-10",
    fontSize: "text-sm",
  },
  md: {
    logoSize: "h-12",
    fontSize: "text-md",
  },
  lg: {
    logoSize: "h-16",
    fontSize: "text-lg",
  },
};

export default function Logo({
  href = "/",
  size,
}: {
  href?: string;
  size?: "sm" | "md" | "lg";
}) {
  let logoSize = "h-10";
  let fontSize = "text-sm";

  if (size) {
    logoSize = sizeMap[size].logoSize;
    fontSize = sizeMap[size].fontSize;
  }

  return (
    <Link className="flex select-none items-center space-x-2" href={href}>
      <img src="/logo.png" alt="logo" className={cn(logoSize, "")} />
      <span className={cn(fontSize, "font-bold")}>hitrostnotipkanje</span>
    </Link>
  );
}
