import Logo from "./logo";
import MainNav from "./main-nav";
import UserNav from "./user-nav";

export default function Header() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div className="flex items-center space-x-4 mr-auto">
                    <Logo />
                    <MainNav />
                </div>
                <UserNav />
            </div>
        </div>
    )
}