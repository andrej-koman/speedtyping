import { StatsProvider } from "~/contexts/StatsContext";
import { getUserStats } from "../actions";
import { calculateStatsWithCalculatedFields } from "~/lib/levels";

import { AppSidebar } from "~/components/app-sidebar";
import { SidebarProvider } from "~/components/ui/sidebar";
import { getLocale } from "next-intl/server";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fetchedStats = await getUserStats();
  const locale = await getLocale();

  if (!fetchedStats) {
    return null;
  }

  const stats = calculateStatsWithCalculatedFields(fetchedStats);
  return (
    <StatsProvider stats={stats}>
      <SidebarProvider>
        <div className="flex h-screen w-screen flex-col">
          <div className="grid h-full w-full lg:grid-cols-5">
            <AppSidebar locale={locale} />
            <div className="col-span-3 p-4 lg:col-span-4">{children}</div>
          </div>
        </div>
      </SidebarProvider>
    </StatsProvider>
  );
}
