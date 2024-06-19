import UserNav from "./user-nav";
import Logo from "./logo";
import LanguageSwitcher from "./language-switcher";
import { getLocale } from "next-intl/server";

export default async function Header() {
  const locale = await getLocale();
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur">
      <div className="flex items-center justify-between p-5">
        <Logo href="/play" size="lg" />
        <div className="flex items-center space-x-6">
          <LanguageSwitcher locale={locale} />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
