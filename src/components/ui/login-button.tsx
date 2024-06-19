import Link from "next/link";
import { Button } from "./button";
import { LogIn } from "lucide-react";
import { useTranslations } from "next-intl";

export default function LoginButton() {
  const t = useTranslations("Header");
  return (
    <Button variant="ghost" asChild>
      <Link href="/login">
        <LogIn className="mr-2 h-5 w-5" />
        {t("login")}
      </Link>
    </Button>
  );
}
