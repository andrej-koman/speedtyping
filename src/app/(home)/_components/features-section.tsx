import { FlagTriangleLeft, Paintbrush, AlignJustify } from "lucide-react";

import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("Features");
  const features = [
    {
      title: t("typingPractice"),
      icon: <FlagTriangleLeft className="h-6 w-6" />,
      description: t("typingPracticeDescription"),
    },
    {
      title: t("customization"),
      icon: <Paintbrush className="h-6 w-6" />,
      description: t("customizationDescription"),
    },
    {
      title: t("leaderboards"),
      icon: <AlignJustify className="h-6 w-6" />,
      description: t("leaderboardsDescription"),
    },
  ];

  return (
    <div className="px-2 py-[72px] sm:py-24 xl:w-[75rem]">
      <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
        {t("title")}
      </h2>
      <div className="mx-auto max-w-xl">
        <p className="mt-5 text-center text-xl text-white/70">
          {t("description")}
        </p>
      </div>
      <div className="mt-16 flex flex-col gap-4 sm:flex-row">
        {features.map(({ title, icon, description }) => (
          <div
            key={title}
            className="rounded-xl border px-5 py-10 text-center sm:flex-1"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white text-black">
              {icon}
            </div>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-2 text-white/70">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
