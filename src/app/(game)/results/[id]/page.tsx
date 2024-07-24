import Results from "../_components/results";
import { getResults } from "~/server/queries";
import { currentUser } from "@clerk/nextjs/server";
import { getUserPlay } from "~/server/queries";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { CircleSlash, Gauge, Target } from "lucide-react";

export const generateMetadata = async () => {
  const t = await getTranslations();
  return {
    title: t("playResults"),
    description: t("playResultsDescription"),
  };
};

export default async function ResultsPage({
  params,
}: {
  params: { id: number };
}) {
  const t = await getTranslations();

  const user = await currentUser();
  if (!user) throw new Error("User not found");

  const play = await getUserPlay(params.id, user.id);
  if (!play) return redirect("/notfound");

  const results = await getResults(user, play);

  const charts = [
    {
      key: "wpm",
      label: "WPM",
      color: "hsl(var(--chart-1))",
      icon: <Gauge size={18} className="mr-2" />,
    },
    {
      key: "accuracy",
      label: t("accuracy"),
      color: "hsl(var(--chart-2))",
      icon: <Target size={18} className="mr-2" />,
    },
    {
      key: "mistakes",
      label: t("mistakes"),
      color: "hsl(var(--chart-3))",
      icon: <CircleSlash size={18} className="mr-2" />,
    },
  ];
  return (
    <div className="flex h-[calc(100vh-5rem)] w-screen flex-col items-center p-0">
      <Results results={results} charts={charts} play={play} />
    </div>
  );
}
