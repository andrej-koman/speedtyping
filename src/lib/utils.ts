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
