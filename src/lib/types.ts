export function isSearchBy(value: string): value is SearchBy {
  return ["Text", "Author", "Source"].includes(value);
}
