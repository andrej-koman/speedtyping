import { CardContent, CardHeader, CardTitle } from "~/components/ui/card";
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
    <div className="col-span-1 row-span-1 grid items-start lg:col-span-1">
      <CardHeader className="flex-row items-center justify-between space-y-1">
        <CardTitle>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        {description}
      </CardContent>
    </div>
  );
}

export default function FeaturesSection() {
  const t = useTranslations("Features");
  return (
    <div className="grid grid-cols-3 grid-rows-1 items-start justify-center gap-6 rounded-lg py-8 xl:w-[75rem]">
      <Feature
        title={t("typingPractice")}
        icon={<FlagTriangleLeft className="h-6 w-6" />}
        description={t("typingPracticeDescription")}
      />
      <Feature
        title={t("customization")}
        icon={<Paintbrush className="h-6 w-6" />}
        description={t("customizationDescription")}
      />
      <Feature
        title={t("leaderboards")}
        icon={<AlignJustify className="h-6 w-6" />}
        description={t("leaderboardsDescription")}
      />
    </div>
  );
}
