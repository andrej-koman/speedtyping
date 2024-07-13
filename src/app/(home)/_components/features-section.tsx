import { FlagTriangleLeft, Paintbrush, AlignJustify } from "lucide-react";
import CarSection from "./car-section";

import { useTranslations } from "next-intl";
import Feature from "./feature";

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
    <div className="px-2 pb-[72px] pt-[36px] sm:pb-24 xl:w-[75rem]">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl">
          {t("title")}
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">
            {t("description")}
          </p>
        </div>
        <div className="mt-12 hidden h-96 w-96 sm:block sm:h-72 sm:w-72">
          <CarSection />
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-4 sm:flex-row">
        {features.map(({ title, icon, description }) => (
          <Feature
            key={title}
            title={title}
            icon={icon}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
