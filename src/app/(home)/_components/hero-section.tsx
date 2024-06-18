import { TypewriterEffectSmooth } from "~/components/ui/typewriter-effect";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Project");

  const name = t("name").split(" ");
  const words = [
    {
      text: name[0],
    },
    {
      text: name[1],
      className: "dark:text-primary-red text-primary-red",
    },
  ];
  return (
    <div className="flex h-screen select-none flex-col items-center justify-center">
      <div className="mb-32">
        <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base">
          {t("moto")}
        </p>
        <TypewriterEffectSmooth words={words} cursorClassName="bg-primary" />
      </div>
    </div>
  );
}
