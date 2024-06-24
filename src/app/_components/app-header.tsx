import UserNav from "./user-nav";
import Logo from "./logo";
import LanguageSwitcher from "./language-switcher";
import { getLocale } from "next-intl/server";

export default async function Header({ stats }: { stats: Stats }) {
  const locale = await getLocale();
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur">
      <div className="flex items-center justify-between p-5">
        <Logo href="/home" size="lg" />
        <div className="flex items-center space-x-6">
          <LanguageSwitcher variant="outline" locale={locale} />
          <UserNav stats={stats} />
        </div>
      </div>
    </header>
  );
}
