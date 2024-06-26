// This constants is used to calculate the level and progress of the user based on the xp
const constant = 0.1;

/*
 *  Calculate the current level of the user based on the xp
 *
 */
const getCurrentLevel = (stats: Stats): number => {
  return Math.floor(constant * Math.sqrt(stats.xp));
};

/*
 *  Calculate the progress of the user based on the xp
 *
 */
const getProgress = (stats: Stats, level: number): number => {
  const nextLevel = level + 1;
  const currentLevelXP = Math.pow(level / constant, 2);
  const nextLevelXP = Math.pow(nextLevel / constant, 2);

  return ((stats.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
};

/*
 *  Calculate the stats of the user based on the xp
 *
 */
export const calculateStats = (stats: Stats): StatsWithCalculatedFields => {
  const level = getCurrentLevel(stats);
  const progress = getProgress(stats, level);
  return { ...stats, level, progress };
};
