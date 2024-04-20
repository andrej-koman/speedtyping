import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

export default function UserNav() {
    return (
        <div>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </div>
    );
}