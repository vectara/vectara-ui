import { ColorTranslator } from "colortranslator";

export type Theme = {
  // Font
  fontFamily?: string;
  fontFamilyMonospace?: string;

  // Semantic colors
  colorAccentShade?: string;
  colorAccentShadeRgb?: string;
  colorAccentLightShade?: string;
  colorAccentLightShadeRgb?: string;
  colorAccentLighterShade?: string;
  colorAccentLighterShadeRgb?: string;

  colorPrimaryShade?: string;
  colorPrimaryShadeRgb?: string;
  colorPrimaryLightShade?: string;
  colorPrimaryLightShadeRgb?: string;
  colorPrimaryLighterShade?: string;
  colorPrimaryLighterShadeRgb?: string;

  colorSuccessShade?: string;
  colorSuccessShadeRgb?: string;
  colorSuccessLightShade?: string;
  colorSuccessLightShadeRgb?: string;
  colorSuccessLighterShade?: string;
  colorSuccessLighterShadeRgb?: string;

  colorWarningShade?: string;
  colorWarningShadeRgb?: string;
  colorWarningLightShade?: string;
  colorWarningLightShadeRgb?: string;
  colorWarningLighterShade?: string;
  colorWarningLighterShadeRgb?: string;

  colorDangerShade?: string;
  colorDangerShadeRgb?: string;
  colorDangerLightShade?: string;
  colorDangerLightShadeRgb?: string;
  colorDangerLighterShade?: string;
  colorDangerLighterShadeRgb?: string;

  // Special colors
  colorPrimaryHighlightShade?: string;
  colorPrimaryHighlightShadeRgb?: string;
  colorSubduedShade?: string;
  colorSubduedShadeRgb?: string;

  // Neutral colors
  colorEmptyShade?: string;
  colorEmptyShadeRgb?: string;
  colorLightShade?: string;
  colorLightShadeRgb?: string;
  colorMediumShade?: string;
  colorMediumShadeRgb?: string;
  colorDarkShade?: string;
  colorDarkShadeRgb?: string;
  colorDarkerShade?: string;
  colorDarkerShadeRgb?: string;
  colorFullShade?: string;
  colorFullShadeRgb?: string;

  // Text colors
  colorText?: string;
  colorTextRgb?: string;
  colorLabel?: string;
  colorLabelRgb?: string;

  // Border colors
  colorBorderMedium?: string;
  colorBorderMediumRgb?: string;
  colorBorderLight?: string;
  colorBorderLightRgb?: string;

  // Categorical colors
  // Interchangeable hue pairs for color-coding categories, e.g. a patch's background and icon.
  // Each pair is named after its hue rather than a meaning, since the hue is arbitrary.
  colorIndigoBackground?: string;
  colorIndigoText?: string;
  colorEmeraldBackground?: string;
  colorEmeraldText?: string;
  colorAmberBackground?: string;
  colorAmberText?: string;
  colorPinkBackground?: string;
  colorPinkText?: string;
  colorSkyBackground?: string;
  colorSkyText?: string;
  colorOrangeBackground?: string;
  colorOrangeText?: string;
  colorSlateBackground?: string;
  colorSlateText?: string;
  colorTealBackground?: string;
  colorTealText?: string;
  colorLimeBackground?: string;
  colorLimeText?: string;
  colorPurpleBackground?: string;
  colorPurpleText?: string;
  colorFuchsiaBackground?: string;
  colorFuchsiaText?: string;
  colorRedBackground?: string;
  colorRedText?: string;

  // Chart colors
  // A categorical palette tuned for plotting data series, distinct from the
  // categorical chip hues above. Each entry differs from its neighbors in both
  // hue and luminance, so series stay distinguishable under color vision
  // deficiency and in grayscale. Capped at 8 — the practical limit for
  // reliably telling categories apart by color.
  colorChart1?: string;
  colorChart2?: string;
  colorChart3?: string;
  colorChart4?: string;
  colorChart5?: string;
  colorChart6?: string;
  colorChart7?: string;
  colorChart8?: string;
};

const fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif`;

const fontFamilyMonospace = '"Roboto Mono", monospace';

export const toRgba = (hex: string, alpha: number) => {
  return new ColorTranslator(hex, { legacyCSS: true }).setA(alpha).RGBA;
};

export const toRgb = (hex: string) => {
  // Return as "r, g, b"
  return new ColorTranslator(hex, { legacyCSS: true }).RGB.slice(4, -1);
};

const colorAccent = "#5f30c3";
const colorPrimary = "#045dda";
const colorSuccess = "#249719";
const colorWarning = "#a86f1b";
const colorDanger = "#d22d2d";

// Semantic colors
const colorAccentShade = colorAccent;
const colorAccentLightShade = toRgba(colorAccent, 0.5);
const colorAccentLighterShade = "#eee7ff";

const colorPrimaryShade = colorPrimary;
const colorPrimaryLightShade = toRgba(colorPrimary, 0.5);
const colorPrimaryLighterShade = "#f1f7ff";

const colorSuccessShade = colorSuccess;
const colorSuccessLightShade = toRgba(colorSuccess, 0.5);
const colorSuccessLighterShade = "#e2f2e0";

const colorWarningShade = colorWarning;
const colorWarningLightShade = toRgba(colorWarning, 0.5);
const colorWarningLighterShade = "#ffeed4";

const colorDangerShade = colorDanger;
const colorDangerLightShade = toRgba(colorDanger, 0.5);
const colorDangerLighterShade = "#fff1f1";

// Special colors
const colorPrimaryHighlightShade = "#d9e2ff";
const colorSubduedShade = "#6d7686";

// Neutral colors
const colorEmptyShade = "#ffffff";
const colorLightShade = "#f1f4f6";
const colorMediumShade = "#cbd1de";
const colorDarkShade = "#3f4551";
const colorDarkerShade = "#1c1d22";
const colorFullShade = "#0b0c0e";

// Border colors
const colorBorderLightShade = "#e3e4f3";

// Categorical colors
// Each hue pairs a tinted background with a saturated foreground for text and icons.
const colorIndigoBackground = "#eef2ff";
const colorIndigoText = "#4f46e5";
const colorEmeraldBackground = "#ecfdf5";
const colorEmeraldText = "#059669";
const colorAmberBackground = "#fef3c7";
const colorAmberText = "#b45309";
const colorPinkBackground = "#fce7f3";
const colorPinkText = "#be185d";
const colorSkyBackground = "#e0f2fe";
const colorSkyText = "#0369a1";
const colorOrangeBackground = "#ffedd5";
const colorOrangeText = "#c2410c";
const colorSlateBackground = "#f1f5f9";
const colorSlateText = "#475569";
const colorTealBackground = "#ccfbf1";
const colorTealText = "#0f766e";
const colorLimeBackground = "#ecfccb";
const colorLimeText = "#4d7c0f";
const colorPurpleBackground = "#f3e8ff";
const colorPurpleText = "#7e22ce";
const colorFuchsiaBackground = "#fae8ff";
const colorFuchsiaText = "#a21caf";
const colorRedBackground = "#fee2e2";
const colorRedText = "#b91c1c";

// Chart colors
// Grounded in the Okabe-Ito colorblind-safe palette, ordered for maximum
// contrast between adjacent series and anchored to the brand's blue and purple.
// The light gold and pure black of the original palette are darkened and
// softened so they read on a light background.
const colorChart1 = "#0072b2"; // Blue, neighbors the brand primary.
const colorChart2 = "#e69f00"; // Orange.
const colorChart3 = "#009e73"; // Teal-green.
const colorChart4 = "#cc79a7"; // Mauve, echoes the brand accent.
const colorChart5 = "#56b4e9"; // Sky.
const colorChart6 = "#d55e00"; // Vermillion.
const colorChart7 = "#9a8200"; // Deep gold.
const colorChart8 = "#3f4551"; // Dark slate.

export const LIGHT_THEME: Theme = {
  // Font
  fontFamily,
  fontFamilyMonospace,

  // Semantic colors
  colorAccentShade,
  colorAccentShadeRgb: toRgb(colorAccentShade),
  colorAccentLightShade,
  colorAccentLightShadeRgb: toRgb(colorAccentLightShade),
  colorAccentLighterShade,
  colorAccentLighterShadeRgb: toRgb(colorAccentLighterShade),

  colorPrimaryShade,
  colorPrimaryShadeRgb: toRgb(colorPrimaryShade),
  colorPrimaryLightShade,
  colorPrimaryLightShadeRgb: toRgb(colorPrimaryLightShade),
  colorPrimaryLighterShade,
  colorPrimaryLighterShadeRgb: toRgb(colorPrimaryLighterShade),

  colorSuccessShade,
  colorSuccessShadeRgb: toRgb(colorSuccessShade),
  colorSuccessLightShade,
  colorSuccessLightShadeRgb: toRgb(colorSuccessLightShade),
  colorSuccessLighterShade,
  colorSuccessLighterShadeRgb: toRgb(colorSuccessLighterShade),

  colorWarningShade,
  colorWarningShadeRgb: toRgb(colorWarningShade),
  colorWarningLightShade,
  colorWarningLightShadeRgb: toRgb(colorWarningLightShade),
  colorWarningLighterShade,
  colorWarningLighterShadeRgb: toRgb(colorWarningLighterShade),

  colorDangerShade,
  colorDangerShadeRgb: toRgb(colorDangerShade),
  colorDangerLightShade,
  colorDangerLightShadeRgb: toRgb(colorDangerLightShade),
  colorDangerLighterShade,
  colorDangerLighterShadeRgb: toRgb(colorDangerLighterShade),

  // Special colors
  colorPrimaryHighlightShade,
  colorPrimaryHighlightShadeRgb: toRgb(colorPrimaryHighlightShade),
  colorSubduedShade,
  colorSubduedShadeRgb: toRgb(colorSubduedShade),

  // Neutral colors
  colorEmptyShade,
  colorEmptyShadeRgb: toRgb(colorEmptyShade),
  colorLightShade,
  colorLightShadeRgb: toRgb(colorLightShade),
  colorMediumShade,
  colorMediumShadeRgb: toRgb(colorMediumShade),
  colorDarkShade,
  colorDarkShadeRgb: toRgb(colorDarkShade),
  colorDarkerShade,
  colorDarkerShadeRgb: toRgb(colorDarkerShade),
  colorFullShade,
  colorFullShadeRgb: toRgb(colorFullShade),

  // Text color
  colorText: colorDarkerShade,
  colorTextRgb: toRgb(colorDarkerShade),
  colorLabel: colorDarkerShade,
  colorLabelRgb: toRgb(colorDarkerShade),

  // Border color
  colorBorderMedium: colorMediumShade,
  colorBorderMediumRgb: toRgb(colorMediumShade),
  colorBorderLight: colorBorderLightShade,
  colorBorderLightRgb: toRgb(colorBorderLightShade),

  // Categorical colors
  colorIndigoBackground,
  colorIndigoText,
  colorEmeraldBackground,
  colorEmeraldText,
  colorAmberBackground,
  colorAmberText,
  colorPinkBackground,
  colorPinkText,
  colorSkyBackground,
  colorSkyText,
  colorOrangeBackground,
  colorOrangeText,
  colorSlateBackground,
  colorSlateText,
  colorTealBackground,
  colorTealText,
  colorLimeBackground,
  colorLimeText,
  colorPurpleBackground,
  colorPurpleText,
  colorFuchsiaBackground,
  colorFuchsiaText,
  colorRedBackground,
  colorRedText,

  // Chart colors
  colorChart1,
  colorChart2,
  colorChart3,
  colorChart4,
  colorChart5,
  colorChart6,
  colorChart7,
  colorChart8
};

export const DARK_THEME: Theme = {
  // Special colors
  colorPrimaryHighlightShade,
  colorPrimaryHighlightShadeRgb: toRgb(colorPrimaryHighlightShade),
  colorSubduedShade,
  colorSubduedShadeRgb: toRgb(colorSubduedShade),

  // Neutral colors (inverted)
  colorEmptyShade: colorFullShade,
  colorEmptyShadeRgb: toRgb(colorFullShade),
  colorLightShade: colorDarkerShade,
  colorLightShadeRgb: toRgb(colorDarkerShade),
  colorMediumShade: colorDarkShade,
  colorMediumShadeRgb: toRgb(colorDarkShade),
  colorDarkShade: colorMediumShade,
  colorDarkShadeRgb: toRgb(colorMediumShade),
  colorDarkerShade: colorLightShade,
  colorDarkerShadeRgb: toRgb(colorLightShade),
  colorFullShade: colorEmptyShade,
  colorFullShadeRgb: toRgb(colorEmptyShade),

  // Text color
  colorText: colorLightShade,
  colorLabel: colorLightShade,

  // Border color
  colorBorderLight: "#323338",

  // Chart colors
  // Lighten the dark anchors so series stay legible on a dark background; the
  // mid-toned hues fall through to their light-theme values.
  colorChart1: "#4aa3e0", // Blue.
  colorChart7: "#d4b400", // Gold.
  colorChart8: "#aab3c2" // Light slate.
};

export const toStyle = (theme: Theme) => {
  const vars = {
    // Font
    "--vui-font-family": theme.fontFamily,
    "--vui-font-family-monospace": theme.fontFamilyMonospace,

    // Semantic colors
    "--vui-color-accent-shade": theme.colorAccentShade,
    "--vui-color-accent-shade-rgb": theme.colorAccentShadeRgb,
    "--vui-color-accent-light-shade": theme.colorAccentLightShade,
    "--vui-color-accent-light-shade-rgb": theme.colorAccentLightShadeRgb,
    "--vui-color-accent-lighter-shade": theme.colorAccentLighterShade,
    "--vui-color-accent-lighter-shade-rgb": theme.colorAccentLighterShadeRgb,

    "--vui-color-primary-shade": theme.colorPrimaryShade,
    "--vui-color-primary-shade-rgb": theme.colorPrimaryShadeRgb,
    "--vui-color-primary-light-shade": theme.colorPrimaryLightShade,
    "--vui-color-primary-light-shade-rgb": theme.colorPrimaryLightShadeRgb,
    "--vui-color-primary-lighter-shade": theme.colorPrimaryLighterShade,
    "--vui-color-primary-lighter-shade-rgb": theme.colorPrimaryLighterShadeRgb,

    "--vui-color-success-shade": theme.colorSuccessShade,
    "--vui-color-success-shade-rgb": theme.colorSuccessShadeRgb,
    "--vui-color-success-light-shade": theme.colorSuccessLightShade,
    "--vui-color-success-light-shade-rgb": theme.colorSuccessLightShadeRgb,
    "--vui-color-success-lighter-shade": theme.colorSuccessLighterShade,
    "--vui-color-success-lighter-shade-rgb": theme.colorSuccessLighterShadeRgb,

    "--vui-color-warning-shade": theme.colorWarningShade,
    "--vui-color-warning-shade-rgb": theme.colorWarningShadeRgb,
    "--vui-color-warning-light-shade": theme.colorWarningLightShade,
    "--vui-color-warning-light-shade-rgb": theme.colorWarningLightShadeRgb,
    "--vui-color-warning-lighter-shade": theme.colorWarningLighterShade,
    "--vui-color-warning-lighter-shade-rgb": theme.colorWarningLighterShadeRgb,

    "--vui-color-danger-shade": theme.colorDangerShade,
    "--vui-color-danger-shade-rgb": theme.colorDangerShadeRgb,
    "--vui-color-danger-light-shade": theme.colorDangerLightShade,
    "--vui-color-danger-light-shade-rgb": theme.colorDangerLightShadeRgb,
    "--vui-color-danger-lighter-shade": theme.colorDangerLighterShade,
    "--vui-color-danger-lighter-shade-rgb": theme.colorDangerLighterShadeRgb,

    // Special colors
    "--vui-color-primary-highlight-shade": theme.colorPrimaryHighlightShade,
    "--vui-color-primary-highlight-shade-rgb": theme.colorPrimaryHighlightShadeRgb,
    "--vui-color-subdued-shade": theme.colorSubduedShade,
    "--vui-color-subdued-shade-rgb": theme.colorSubduedShadeRgb,

    // Neutral colors
    "--vui-color-empty-shade": theme.colorEmptyShade,
    "--vui-color-empty-shade-rgb": theme.colorEmptyShadeRgb,
    "--vui-color-light-shade": theme.colorLightShade,
    "--vui-color-light-shade-rgb": theme.colorLightShadeRgb,
    "--vui-color-medium-shade": theme.colorMediumShade,
    "--vui-color-medium-shade-rgb": theme.colorMediumShadeRgb,
    "--vui-color-dark-shade": theme.colorDarkShade,
    "--vui-color-dark-shade-rgb": theme.colorDarkShadeRgb,
    "--vui-color-darker-shade": theme.colorDarkerShade,
    "--vui-color-darker-shade-rgb": theme.colorDarkerShadeRgb,
    "--vui-color-full-shade": theme.colorFullShade,
    "--vui-color-full-shade-rgb": theme.colorFullShadeRgb,

    // Text colors
    "--vui-color-text": theme.colorText,
    "--vui-color-text-rgb": theme.colorTextRgb,
    "--vui-color-label": theme.colorLabel,
    "--vui-color-label-rgb": theme.colorLabelRgb,

    // Border colors
    "--vui-color-border-medium": theme.colorBorderMedium,
    "--vui-color-border-medium-rgb": theme.colorBorderMediumRgb,
    "--vui-color-border-light": theme.colorBorderLight,
    "--vui-color-border-light-rgb": theme.colorBorderLightRgb,

    // Categorical colors
    "--vui-color-indigo-background": theme.colorIndigoBackground,
    "--vui-color-indigo-text": theme.colorIndigoText,
    "--vui-color-emerald-background": theme.colorEmeraldBackground,
    "--vui-color-emerald-text": theme.colorEmeraldText,
    "--vui-color-amber-background": theme.colorAmberBackground,
    "--vui-color-amber-text": theme.colorAmberText,
    "--vui-color-pink-background": theme.colorPinkBackground,
    "--vui-color-pink-text": theme.colorPinkText,
    "--vui-color-sky-background": theme.colorSkyBackground,
    "--vui-color-sky-text": theme.colorSkyText,
    "--vui-color-orange-background": theme.colorOrangeBackground,
    "--vui-color-orange-text": theme.colorOrangeText,
    "--vui-color-slate-background": theme.colorSlateBackground,
    "--vui-color-slate-text": theme.colorSlateText,
    "--vui-color-teal-background": theme.colorTealBackground,
    "--vui-color-teal-text": theme.colorTealText,
    "--vui-color-lime-background": theme.colorLimeBackground,
    "--vui-color-lime-text": theme.colorLimeText,
    "--vui-color-purple-background": theme.colorPurpleBackground,
    "--vui-color-purple-text": theme.colorPurpleText,
    "--vui-color-fuchsia-background": theme.colorFuchsiaBackground,
    "--vui-color-fuchsia-text": theme.colorFuchsiaText,
    "--vui-color-red-background": theme.colorRedBackground,
    "--vui-color-red-text": theme.colorRedText,

    // Chart colors
    "--vui-chart-1": theme.colorChart1,
    "--vui-chart-2": theme.colorChart2,
    "--vui-chart-3": theme.colorChart3,
    "--vui-chart-4": theme.colorChart4,
    "--vui-chart-5": theme.colorChart5,
    "--vui-chart-6": theme.colorChart6,
    "--vui-chart-7": theme.colorChart7,
    "--vui-chart-8": theme.colorChart8
  };

  // Remove undefined values.
  return Object.fromEntries(Object.entries(vars).filter(([_, v]) => v !== undefined)) as Record<string, string>;
};
