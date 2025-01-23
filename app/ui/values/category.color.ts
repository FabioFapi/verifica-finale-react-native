import { COLORS } from "./color";

const colorPalette = [
  { primary: COLORS.blue.light, secondary: COLORS.blue.dark },
  { primary: COLORS.primary.green, secondary: COLORS.neutral.dark },
  { primary: COLORS.accent.orange, secondary: COLORS.neutral.dark },
  { primary: COLORS.primary.red, secondary: COLORS.neutral.dark },
  { primary: COLORS.accent.yellow, secondary: COLORS.neutral.dark },
];

const categoryColorMap = new Map();

let colorIndex = 0;

export const getCategoryColor = (category: string): string => {
  if (!categoryColorMap.has(category)) {
    categoryColorMap.set(
      category,
      colorPalette[colorIndex % colorPalette.length],
    );
    colorIndex++;
  }
  return categoryColorMap.get(category).primary;
};

export const getCategoryTextColor = (category: string): string => {
  if (!categoryColorMap.has(category)) {
    getCategoryColor(category);
  }
  return categoryColorMap.get(category).secondary;
};