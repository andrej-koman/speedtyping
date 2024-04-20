import Logo from "./logo";
import MainNav from "./main-nav";
import UserNav from "./user-nav";

import { SignedIn } from "@clerk/nextjs";

export default function Header() {
    return (
        <div className="border-b px-52">
            <div className="flex h-16 items-center px-4">
                <div className="flex items-center space-x-4 mr-auto">
                    <Logo />
                    <SignedIn>
                        <MainNav />
                    </SignedIn>
                </div>
                <UserNav />
            </div>
        </div>
    )
}