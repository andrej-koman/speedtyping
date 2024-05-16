import Logo from "./logo";
import UserNav from "../(dash)/_components/user-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur">
      <div className="flex h-14 items-center justify-between px-5">
        <Logo href="/search" />
        <UserNav />
      </div>
    </header>
  );
}
