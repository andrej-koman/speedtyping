import LanguageSwitcher from "./language-switcher";
import { getLocale } from "next-intl/server";

export default async function Header() {
  const locale = await getLocale();
  return (
    <header className="transparent absolute right-0 top-0 z-50 w-full flex justify-end">
      <div className="flex text-end w-max space-x-6 p-4">
        <LanguageSwitcher variant="ghost" locale={locale} />
      </div>
    </header>
  );
}
