import { StatsProvider } from "~/contexts/StatsContext";
import { getUserStats } from "../actions";
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
  return <StatsProvider stats={stats}>{children}</StatsProvider>;
}
