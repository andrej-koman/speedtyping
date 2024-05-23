import { Button } from "~/components/ui/button";
import Link from "next/link";
import Logo from "../../_components/logo";
import { MonitorPlay } from "lucide-react";
import LoginButton from "~/components/ui/login-button";
import { SignedOut, SignedIn } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur">
      <div className="flex h-14 items-center justify-between px-5">
        <Logo href="/" />
        <div className="flex flex-row gap-x-2">
          <SignedOut>
            <LoginButton />
          </SignedOut>
          <SignedIn>
            <Button
              variant="default"
              size="sm"
              className="flex items-center justify-center text-xs"
              asChild
            >
              <Link href="/search" className="text-justify">
                <MonitorPlay className="mr-2 h-5 w-5" />
                Play
              </Link>
            </Button>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
