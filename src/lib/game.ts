import { type PlayStats } from "types/game";

/**
 *  Calculate the speed of the car based on the number of letters in the quote
 *
 */
export function calculateCarSpeed(numOfLetters: number) {
  return 1 / numOfLetters;
}

/**
 * Calculate the xp gained based on the stats of the play
 *
 */
export function calculateXPGained(stats: PlayStats): number {
  const { wpm, accuracy } = calculateStats(stats);
  let xp = 0;
  if (wpm > 0) xp += wpm;
  if (accuracy > 0) xp += accuracy;
  if (stats.words > 0) xp += Math.round(stats.words / 2);

  if (stats.mistakes > 0) xp -= stats.mistakes * 5;

  if (xp < 0) xp = 0;

  return xp;
}

/**
 *  Calculate the stats for the play
 *
 */
export function calculateStats(stats: PlayStats) {
  return {
    wpm: calculateWPM(stats.words, stats.time),
    accuracy: calculateAccuracy(stats.mistakes, stats.characters),
    ...stats,
  };
}

/**
 *  Calculate WPM based on the number of words and time
 *
 */
function calculateWPM(words: number, time: number) {
  return Math.round((words / time) * 60);
}

/**
 *  Calculate the accuracy based on the number of mistakes and characters
 *
 */
function calculateAccuracy(mistakes: number, characters: number) {
  return Math.round(((characters - mistakes) / characters) * 100);
}
