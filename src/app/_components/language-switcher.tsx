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

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const languages = {
    en: "English",
    sl: "Slovenian",
  };

  const pathname = usePathname();

  return (
    <div className="hidden sm:block">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2">
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
                key === locale ? "flex items-center justify-between" : ""
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
