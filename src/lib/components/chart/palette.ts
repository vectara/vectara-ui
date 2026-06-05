import { PatchColor } from "../patch/VuiPatch";

// The number of distinct colors in the chart palette. Past this many series,
// no palette stays reliably distinguishable, so callers should group or facet.
export const CHART_COLOR_COUNT = 8;

// The ordered chart palette as CSS variable references, so series colors stay
// reactive to the active theme. These are tuned for series discrimination
// (hue + luminance contrast, colorblind-safe), distinct from the categorical
// chip hues. See the chart color tokens in Theme.ts.
export const CHART_PALETTE = Array.from({ length: CHART_COLOR_COUNT }, (_, index) => `var(--vui-chart-${index + 1})`);

// When the series count exceeds the palette, each wrap shifts lightness rather
// than repeating the same color. Lightness is a partially colorblind-safe
// channel, so a base hue and its darker/lighter variants stay distinguishable.
// This lets charts degrade gracefully past eight series — though it does not
// make a chart with that many categories genuinely readable; prefer grouping or
// a bar chart instead.
const tierTransforms = [
  (color: string) => color,
  (color: string) => `color-mix(in srgb, ${color}, black 22%)`,
  (color: string) => `color-mix(in srgb, ${color}, white 32%)`
];

// Pick a series color by index. The base hue cycles every CHART_COLOR_COUNT
// entries; the lightness tier advances on each cycle.
export const getChartColorByIndex = (index: number) => {
  const base = CHART_PALETTE[index % CHART_COLOR_COUNT];
  const tier = Math.floor(index / CHART_COLOR_COUNT) % tierTransforms.length;
  return tierTransforms[tier](base);
};

// Resolve a categorical hue to its saturated foreground — an escape hatch for
// series that need a specific brand color rather than the default palette.
export const getChartColor = (color: PatchColor) => `var(--vui-color-${color}-text)`;
