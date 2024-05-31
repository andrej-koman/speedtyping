import UserNav from "../(dash)/_components/user-nav";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur">
      <div className="flex items-center justify-between p-5">
        <Logo href="/play" />
        <UserNav />
      </div>
    </header>
  );
}
