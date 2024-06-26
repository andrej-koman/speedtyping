/**
 *  Check if a string is a valid SearchBy
 */
export function isSearchBy(value: string): value is SearchBy {
  return ["Text", "Author", "Source"].includes(value);
}
