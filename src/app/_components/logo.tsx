/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { useTranslations } from "next-intl";

const sizeMap = {
  sm: {
    logoSize: "h-10",
    fontSize: "text-lg",
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
  size = "sm",
}: {
  href?: string;
  size?: "sm" | "md" | "lg";
}) {
  let fontSize = "";
  if (size) {
    fontSize = sizeMap[size].fontSize;
  }
  const t = useTranslations("Project");
  const name = t("name").split(" ");
  return (
    <Link className="flex select-none items-center gap-1" href={href}>
      <span className={cn(fontSize, "font-bold")}>{name[0]}</span>
      <span className={cn(fontSize, "font-bold text-primary")}>{name[1]}</span>
    </Link>
  );
}
