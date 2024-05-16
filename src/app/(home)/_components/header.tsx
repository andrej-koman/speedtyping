import { Button } from "~/components/ui/button";
import Link from "next/link";
import Logo from "../../_components/logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur">
      <div className="px-5 flex h-14 items-center justify-between">
        <Logo href="/" />
        <div className="flex flex-row gap-x-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex items-center justify-center text-xs"
            asChild
          >
            <Link href="/search" className="text-justify">
              Play
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
