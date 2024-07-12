import Logo from "../../_components/logo";
import LanguageSwitcher from "~/app/_components/language-switcher";
import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export default async function Header() {
  const locale = await getLocale();
  const t = await getTranslations("Header");
  return (
    <header className="sticky top-0 z-50 flex w-full justify-center backdrop-blur">
      <div className="flex h-14 w-full items-center justify-between px-2 xl:w-[75rem]">
        <Logo href="/" size="lg" />
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
