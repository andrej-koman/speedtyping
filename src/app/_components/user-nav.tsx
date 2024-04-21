"use client";

import { SignedIn, SignedOut, SignOutButton, useUser } from "@clerk/nextjs";
import SignInButton from "~/components/ui/sign-in-button";

export default function UserNav() {
    const { user } = useUser();

    return (
        <>
            <SignedIn>
                <div>{user?.firstName}</div>
                <SignOutButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </>
    );
}