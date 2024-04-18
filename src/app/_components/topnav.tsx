import Logo from "./logo";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function TopNav() {
    return (
        <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
            <Logo />
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </nav>
    )
}