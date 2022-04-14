export type PromiseContent<T> = T extends Promise<infer U> ? U : never;

export type ScreenSize = "sm" | "md" | "lg" | "xl" | "2xl";

const baseColors = ["transparent", "current", "black", "white"] as const;

const colors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
] as const;

const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

export type ColorName =
  | typeof baseColors[number]
  | `${typeof colors[number]}-${typeof colorShades[number]}`;
