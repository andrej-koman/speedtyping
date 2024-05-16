import Logo from "../../_components/logo";
import UserNav from "./user-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur">
      <div className="px-5 flex h-14 items-center justify-between">
        <Logo href="/play" className="h-10" />
        <UserNav />
      </div>
    </header>
  );
}
