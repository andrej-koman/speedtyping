import { type PlayStats } from "types/game";

/**
 *  Calculate the speed of the car based on the number of letters in the quote
 *
 */
export function calculateCarSpeed(numOfLetters: number) {
  return 1 / numOfLetters;
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
