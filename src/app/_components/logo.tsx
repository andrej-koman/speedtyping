/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { useTranslations } from "next-intl";

const sizeMap = {
  sm: {
    fontSize: "text-lg",
  },
  md: {
    fontSize: "text-md",
  },
  lg: {
    fontSize: "text-logo",
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
      <span className={`font-bold ${fontSize}`}>{name[0]}</span>
      <span className={`font-bold text-primary ${fontSize}`}>{name[1]}</span>
    </Link>
  );
}
