import { quotes } from "~/server/db/schema";

export const convertSearchBy = (searchBy: string) => {
  switch (searchBy) {
    case "Text":
      return quotes.text;
    case "Author":
      return quotes.author;
    case "Source":
      return quotes.source;
    default:
      return quotes.text;
  }
};

export const updateRecentSearches = (currentArray: string[], query: string) => {
  // Check if array already contains a word that starts with the query
  let foundIndex = 0;
  const found = currentArray.find((element, index) => {
    const startsWith = element.startsWith(query) || query.startsWith(element);
    if (startsWith) foundIndex = index;
    return startsWith;
  });

  if (!found) {
    // If we do not find the element and the list is  too big we add the query to the start
    if (currentArray.length >= 5) return [query, ...currentArray.slice(0, -1)];
  } else {
    if (currentArray.length < 6)
      return [
        ...currentArray.slice(0, foundIndex),
        query,
        ...currentArray.slice(foundIndex + 1),
      ];
  }

  // If found and length is less than 6 Default just append to the end of array
  return [...currentArray, query];
};
