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
import { Github, GitGraph, Mail } from "lucide-react";
import { Separator } from "~/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
  Tooltip,
} from "~/components/ui/tooltip";

export function Sidebar({ className }: { className?: string }) {
  const t = useTranslations();
  const pathname = usePathname();

  const links = [
    {
      href: "mailto:",
      icon: <Mail className="h-5 w-5" />,
      target: "_blank",
      text: t("contact"),
    },
    {
      href: "https://github.com/andrej-koman/speedtyping.git",
      icon: <Github className="h-5 w-5" />,
      target: "_blank",
      text: "Github",
    },
  ];

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
      <div className="flex items-center justify-between px-3 py-4">
        <small className="flex items-center gap-1">
          <GitGraph className="h-4 w-4" />
          1.0.0 BETA
        </small>
        <div className="flex gap-2">
          <TooltipProvider delayDuration={0}>
            {links.map((link) => (
              <Tooltip key={link.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    target={link.target}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "flex items-center",
                    )}
                  >
                    {link.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{link.text}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
