"use client";
import * as React from "react";
import { CheckIcon, Globe, type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { setLocale } from "~/app/actions";

export function NavSecondary({
  items,
  locale,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
  locale: string;
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const t = useTranslations("Lang");
  const languages = {
    en: t("en"),
    sl: t("sl"),
  };

  const pathname = usePathname();
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="sm">
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton asChild size="sm">
                  <a href="#">
                    <Globe />
                    <span>{locale == "en" ? languages.en : languages.sl}</span>
                  </a>
                </SidebarMenuButton>
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
