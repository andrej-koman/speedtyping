import Logo from "./logo";
import MainNav from "./main-nav";
import UserNav from "./user-nav";

import { SignedIn } from "@clerk/nextjs";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur">
            <div className="container flex h-14 max-w-screen-2xl justify-between items-center">
                <div className="mr-4 flex items-center space-x-4">
                    <Logo />
                    <SignedIn>
                        <MainNav />
                    </SignedIn>
                </div>
                <div className="">
                    <UserNav />
                </div>
            </div>
        </header>
    )
}