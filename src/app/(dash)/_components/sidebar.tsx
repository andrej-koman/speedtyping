"use client";
import { cn } from "~/lib/utils";
import { Button, buttonVariants } from "~/components/ui/button";
import { useTranslations } from "next-intl";
import {
  Home,
  Grid2x2,
  Star,
  TableProperties,
  Paintbrush2,
} from "lucide-react";
import { Separator } from "~/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar({ className }: { className?: string }) {
  const t = useTranslations();
  const pathname = usePathname();
  return (
    <div className={cn("flex flex-col justify-between", className)}>
      <div className="space-y-2 py-4">
        <div className="px-3 pb-2">
          <div className="space-y-1">
            <Link
              href="/home"
              className={cn(
                buttonVariants({
                  variant: pathname === "/home" ? "secondary" : "ghost",
                }),
                "w-full justify-start",
              )}
            >
              <Home className="mr-2 h-4 w-4" />
              {t("home")}
            </Link>
            <Link
              href="/search"
              className={cn(
                buttonVariants({
                  variant: pathname === "/search" ? "secondary" : "ghost",
                }),
                "w-full justify-start",
              )}
            >
              <Grid2x2 className="mr-2 h-4 w-4" />
              {t("search")}
            </Link>
            <Button variant="ghost" className="w-full justify-start">
              <Star className="mr-2 h-4 w-4" />
              {t("favorites")}
            </Button>
          </div>
        </div>
        <div className="px-4">
          <Separator orientation="horizontal" />
        </div>
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <TableProperties className="mr-2 h-4 w-4" />
              {t("leaderboards")}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Paintbrush2 className="mr-2 h-4 w-4" />
              {t("customize")}
            </Button>
          </div>
        </div>
      </div>
      <div className="px-3 py-4"></div>
    </div>
  );
}
