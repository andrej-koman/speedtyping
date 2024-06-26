"use client";
import { SignedIn, useUser, useClerk } from "@clerk/nextjs";

import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { Progress } from "~/components/ui/progress";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "~/components/ui/dropdown-menu";

import { LogOut, Settings } from "lucide-react";
import { useStats } from "~/contexts/StatsContext";
import { useTranslations } from "next-intl";

export default function UserNav() {
  const t = useTranslations();
  const { user } = useUser();
  const { level, progress } = useStats();

  const { signOut } = useClerk();
  return (
    <SignedIn>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <div className="flex flex-row items-center space-x-2">
            <div className="flex min-w-[8rem] flex-col items-end justify-center">
              <div className="flex w-full items-center justify-between">
                <span className="text-md font-bold">{level}</span>
                <span className="ms-5 text-sm font-bold">{user?.username}</span>
              </div>
              <Progress value={progress} />
            </div>
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage
                src={user?.imageUrl}
                alt={user?.fullName ?? undefined}
              />
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {user?.fullName}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button className="flex w-full items-center justify-between">
              {t("settings")}
              <Settings className="h-4 w-4" />
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={async () => {
                await signOut();
              }}
              className="flex w-full items-center justify-between"
            >
              {t("Header.logout")}
              <LogOut className="h-4 w-4" />
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SignedIn>
  );
}
