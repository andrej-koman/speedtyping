import { Button } from "~/components/ui/button";
import Link from "next/link";
import Logo from "../../_components/logo";
import { MonitorPlay } from "lucide-react";
import LoginButton from "~/components/ui/login-button";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import LanguageSwitcher from "~/app/_components/language-switcher";
import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export default async function Header() {
  const locale = await getLocale();
  const t = await getTranslations("Header");
  return (
    <header className="sticky top-0 z-50 flex w-full justify-center backdrop-blur">
      <div className="flex h-14 items-center justify-between px-5 xl:w-[75rem]">
        <Logo href="/" size="lg" />
        <div className="flex flex-row gap-x-2">
          <LanguageSwitcher locale={locale} />
          <SignedOut>
            <LoginButton />
          </SignedOut>
          <SignedIn>
            <Button variant="default" asChild>
              <Link href="/play">
                <MonitorPlay className="mr-2 h-5 w-5" />
                {t("play")}
              </Link>
            </Button>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
