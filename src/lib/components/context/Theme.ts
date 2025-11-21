import { ColorTranslator } from "colortranslator";

export type Theme = {
  // Font
  fontFamily?: string;

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
};

const fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif`;

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

export const LIGHT_THEME: Theme = {
  // Font
  fontFamily,

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
  colorBorderLightRgb: toRgb(colorBorderLightShade)
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
  colorBorderLight: "#323338"
};

export const toStyle = (theme: Theme) => {
  const vars = {
    // Font
    "--vui-font-family": theme.fontFamily,

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
    "--vui-color-label": theme.colorLabel,

    // Border colors
    "--vui-color-border-medium": theme.colorBorderMedium,
    "--vui-color-border-light": theme.colorBorderLight
  };

  // Remove undefined values.
  return Object.fromEntries(Object.entries(vars).filter(([_, v]) => v !== undefined)) as Record<string, string>;
};
