import Header from "../_components/app-header";
import { StatsProvider } from "~/contexts/StatsContext";
import { getUserStats } from "../actions";
import { calculateStats } from "~/lib/levels";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fetchedStats = await getUserStats();

  if (!fetchedStats) {
    return null;
  }

  const stats = calculateStats(fetchedStats);
  return (
    <StatsProvider stats={stats}>
      <Header />
      {children}
    </StatsProvider>
  );
}
