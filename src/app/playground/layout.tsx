import { StatsProvider } from "~/contexts/StatsContext";
import { getUserStats } from "../actions";
import { calculateStatsWithCalculatedFields } from "~/lib/levels";

export default async function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // For playground, we'll provide mock stats if user doesn't have them
  let stats;
  
  try {
    const fetchedStats = await getUserStats();
    if (fetchedStats) {
      stats = calculateStatsWithCalculatedFields(fetchedStats);
    } else {
      // Provide default mock stats for playground
      stats = {
        id: 1,
        user_id: "playground-user",
        xp: 100,
        total_plays: 5,
        created_at: new Date(),
        level: 1,
        progress: 25,
        xpToNextLevel: 300,
      };
    }
  } catch (error) {
    // Fallback to mock stats if there's any error
    stats = {
      id: 1,
      user_id: "playground-user",
      xp: 100,
      total_plays: 5,
      created_at: new Date(),
      level: 1,
      progress: 25,
      xpToNextLevel: 300,
    };
  }

  return <StatsProvider stats={stats}>{children}</StatsProvider>;
}
