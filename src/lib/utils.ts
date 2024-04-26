import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
