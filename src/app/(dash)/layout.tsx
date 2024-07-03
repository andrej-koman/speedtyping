import { StatsProvider } from "~/contexts/StatsContext";
import Header from "../_components/app-header";
import { getUserStats } from "../actions";
import { Sidebar } from "./_components/sidebar";
import { calculateStatsWithCalculatedFields } from "~/lib/levels";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fetchedStats = await getUserStats();

  if (!fetchedStats) {
    return null;
  }

  const stats = calculateStatsWithCalculatedFields(fetchedStats);
  return (
    <StatsProvider stats={stats}>
      <div className="flex h-screen w-screen flex-col">
        <Header />
        <div className="grid h-full w-full lg:grid-cols-5">
          <Sidebar />
          <div className="col-span-3 p-4 lg:col-span-4">{children}</div>
        </div>
      </div>
    </StatsProvider>
  );
}
