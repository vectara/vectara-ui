import { PatchColor } from "../patch/VuiPatch";

// Ordered palette for charts. The sequence maximizes hue contrast between
// adjacent series and mirrors the categorical color order used elsewhere in
// the design system, with the neutral slate placed last.
export const CHART_COLOR: readonly PatchColor[] = [
  "indigo",
  "emerald",
  "amber",
  "pink",
  "sky",
  "orange",
  "teal",
  "lime",
  "purple",
  "fuchsia",
  "red",
  "slate"
] as const;

// Resolve a hue to its saturated foreground CSS variable, suitable for an SVG
// fill or stroke. Using the variable rather than a hex value keeps charts
// reactive to the active theme.
export const getChartColor = (color: PatchColor) => `var(--vui-color-${color}-text)`;

// Pick a series color by index, wrapping around when there are more series
// than palette entries.
export const getChartColorByIndex = (index: number) => getChartColor(CHART_COLOR[index % CHART_COLOR.length]);
