const constant = 0.1;

const getCurrentLevel = (stats: Stats): number => {
  return Math.floor(constant * Math.sqrt(stats.xp));
};

const getProgress = (stats: Stats, level: number): number => {
  const nextLevel = level + 1;
  const currentLevelXP = Math.pow(level / constant, 2);
  const nextLevelXP = Math.pow(nextLevel / constant, 2);

  return ((stats.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
};

export const calculateStats = (stats: Stats): StatsWithCalculatedFields => {
  const level = getCurrentLevel(stats);
  const progress = getProgress(stats, level);
  return { ...stats, level, progress };
};
