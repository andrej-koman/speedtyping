import { FlagTriangleLeft, Paintbrush, AlignJustify } from "lucide-react";

import { useTranslations } from "next-intl";

function Feature({
  title,
  icon,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-primary/30 px-5 py-10 text-center">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary">
        {icon}
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
}

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
    <div className="flex flex-col gap-4 px-2 xl:w-[75rem]">
      {features.map(({ title, icon, description }) => (
        <div
          key={title}
          className="rounded-xl border border-primary/30 px-5 py-10 text-center"
        >
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary">
            {icon}
          </div>
          <h3 className="mt-6 font-bold">{title}</h3>
          <p className="mt-2 text-white/70">{description}</p>
        </div>
      ))}
    </div>
  );
}
