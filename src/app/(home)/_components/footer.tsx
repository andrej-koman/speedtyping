import { getTranslations } from "next-intl/server";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";

export default async function Footer() {
  const year = new Date().getFullYear();
  const t = await getTranslations();
  return (
    <footer className="mt-[72px] flex w-full justify-center border-t border-white/20 px-2 py-2 text-white/60">
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between xl:w-[75rem]">
        <div className="text-center">
          © {year} Andrej Koman. {t("allRightsReserved")}
        </div>
        <ul className="flex justify-center gap-2.5">
          <li>
            <Link
              href="https://github.com/andrej-koman/speedtyping"
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
              target="_blank"
            >
              <Github className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/andrej-koman-424883235/"
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
              target="_blank"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link
              href="mailto:andrejkoman@hotmail.com"
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
              target="_blank"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
