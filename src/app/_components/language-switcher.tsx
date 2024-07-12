"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";

import { Button } from "~/components/ui/button";
import { GlobeIcon, CheckIcon } from "lucide-react";

import { setLocale } from "~/app/actions";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { cn } from "~/lib/utils";

export default function LanguageSwitcher({
  locale,
  variant = "ghost",
  className,
}: {
  locale: string;
  variant?: "ghost" | "outline";
  className?: string;
}) {
  const t = useTranslations("Lang");
  const languages = {
    en: t("en"),
    sl: t("sl"),
  };

  const pathname = usePathname();

  return (
    <div className={className ?? ""}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={variant} className="flex items-center gap-2">
            <GlobeIcon className="h-5 w-5" />
            <span className="uppercase">{locale}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          {Object.entries(languages).map(([key, value]) => (
            <DropdownMenuItem
              key={key}
              onClick={() => setLocale(key, pathname)}
              className={
                key === locale
                  ? "flex cursor-pointer items-center justify-between"
                  : "cursor-pointer "
              }
            >
              <span>{value}</span>
              {key === locale && <CheckIcon className="h-5 w-5" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
