import Logo from "./logo";
import UserNav from "./user-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="mr-4 flex items-center space-x-4">
          <Logo />
        </div>
        <div className="">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
