"use client";
import { SignedIn, useUser } from "@clerk/nextjs";

import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { Progress } from "~/components/ui/progress";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
} from "~/components/ui/dropdown-menu";
import { SignOutButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { Badge } from "~/components/ui/badge";

export default function UserNav() {
  const { user } = useUser();
  const [progress, setProgress] = useState<number>(0);
  // TODO
  // - Add a level component
  return (
    <SignedIn>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <div className="flex flex-row items-center space-x-3">
            <div className="flex flex-row items-center justify-center space-x-2">
              <Badge
                variant="secondary"
                className="px-2 py-0.5 text-center text-sm"
              >
                {25}
              </Badge>
              <div className="mb-2 flex min-w-[8rem] flex-col items-end justify-center">
                <span className="text-sm font-bold uppercase">
                  {user?.username}
                </span>
                <Progress value={progress} />
              </div>
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
            <SignOutButton redirectUrl="/" />
            <DropdownMenuShortcut>
              <LogOut className="h-4 w-4" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SignedIn>
  );
}
