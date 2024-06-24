import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { quotes } from "~/server/db/schema";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateCarSpeed(numOfLetters: number) {
  return 1 / numOfLetters;
}

export const textSizeMapping: Record<string, string> = {
  sm: "Small",
  md: "Medium",
  "2xl": "Large",
  "4xl": "Extra Large",
};

export const ColorSchemes = [
  {
    body: "#e11d48",
    window: "#000000",
    bumpers: "#5A5A5A",
    lights: "#d3d3d3",
    wheels: "#d3d3d3",
  },
  {
    body: "#A020F0",
    window: "#232b2b",
    bumpers: "#232b2b",
    lights: "#ffffff",
    wheels: "#ffffff",
  },
  {
    body: "#227C9D",
    window: "#000000",
    bumpers: "#000000",
    lights: "#fff49b",
    wheels: "#d3d3d3",
  },
  {
    body: "#315634",
    window: "#aaaaaa",
    bumpers: "#aaaaaa",
    lights: "#ffffff",
    wheels: "#ffffff",
  },
  {
    body: "#ffffff",
    window: "#000000",
    bumpers: "#000000",
    lights: "#000000",
    wheels: "#d3d3d3",
  },
  {
    body: "#000000",
    window: "#aaaaaa",
    bumpers: "#aaaaaa",
    lights: "#ffffff",
    wheels: "#d3d3d3",
  },
];

export const DefaultGameSettings = {
  has3D: true,
};

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

export const calulateLevel = (xp: number) => {
  return Math.floor(xp / 100);
};
