import { PatchColor } from "../patch/VuiPatch";

// The number of distinct colors in the chart palette. Past this many series,
// no palette stays reliably distinguishable, so callers should group or facet.
export const CHART_COLOR_COUNT = 8;

// The ordered chart palette as CSS variable references, so series colors stay
// reactive to the active theme. These are tuned for series discrimination
// (hue + luminance contrast, colorblind-safe), distinct from the categorical
// chip hues. See the chart color tokens in Theme.ts.
export const CHART_PALETTE = Array.from({ length: CHART_COLOR_COUNT }, (_, index) => `var(--vui-chart-${index + 1})`);

// Pick a series color by index, wrapping around when there are more series than
// palette entries.
export const getChartColorByIndex = (index: number) => CHART_PALETTE[index % CHART_COLOR_COUNT];

// Resolve a categorical hue to its saturated foreground — an escape hatch for
// series that need a specific brand color rather than the default palette.
export const getChartColor = (color: PatchColor) => `var(--vui-color-${color}-text)`;
