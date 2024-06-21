import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const t = await getTranslations();
  return {
    title: t("home"),
    description: t("homeDescription"),
  };
};

export default async function Page() {
  return <div>STILL HAVE TO DESIGN THIS</div>;
}
