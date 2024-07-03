import { type PlayStats } from "types/game";
// This constants is used to calculate the level and progress of the user based on the xp
const constant = 0.1;

/*
 *  Calculate the current level of the user based on the xp
 *
 */
const getCurrentLevel = (xp: number): number => {
  return Math.floor(constant * Math.sqrt(xp));
};

/*
 *  Calculate the progress of the user based on the xp
 *
 */
const getProgress = (xp: number, level: number): number => {
  const nextLevel = level + 1;
  const currentLevelXP = Math.pow(level / constant, 2);
  const nextLevelXP = Math.pow(nextLevel / constant, 2);

  return ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
};

/*
 *  Calculate the stats of the user based on the xp
 *
 */
export const calculateStatsWithCalculatedFields = (
  stats: PlayerStats,
): StatsWithCalculatedFields => {
  const level = getCurrentLevel(stats.xp);
  const progress = getProgress(stats.xp, level);
  return { ...stats, level, progress };
};

/**
 *  Calculate the XP for the animation, by figuring out what level the user will finish at and at what percentage
 *  of that level they will finish at
 *
 */
export function calculateXPAnimation(
  gainedXp: number,
  playerStats: PlayerStats,
) {
  // My plan is, that i map all the levels and the progress of the lever to the xp
  const targetXp = playerStats.xp + gainedXp;
  const targetLevel = getCurrentLevel(playerStats.xp);
  const targetProgress = getProgress(targetXp, targetLevel);

  return {
    targetXp,
    targetLevel,
    targetProgress,
  };
}

/**
 * Calculate the xp gained based on the stats of the play
 *
 */
export function calculateXPGained(
  wpm: number,
  accuracy: number,
  stats: Play,
): number {
  let xp = 0;
  if (wpm > 0) xp += wpm;
  if (accuracy > 0) xp += accuracy;
  if (stats.words > 0) xp += Math.round(stats.words / 2);

  if (stats.mistakes > 0) xp -= stats.mistakes * 5;

  if (xp < 0) xp = 0;

  return xp;
}
