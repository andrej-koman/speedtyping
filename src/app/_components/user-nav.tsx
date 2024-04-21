"use client";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";

import SignInButton from "~/components/ui/sign-in-button";

import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";

export default function UserNav() {
    const { user } = useUser();
    return (
        <>
            <SignedIn>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative rounded-full h-8 w-8">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={user?.imageUrl} alt={user?.fullName ?? undefined} />
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">{user?.fullName}</p>
                            </div>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </>
    );
}