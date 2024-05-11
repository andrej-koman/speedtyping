import Logo from "../../_components/logo";
import UserNav from "./user-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Logo />
        <UserNav />
      </div>
    </header>
  );
}
