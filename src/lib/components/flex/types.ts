export const FLEX_SPACING = ["none", "xxs", "xs", "s", "m", "l", "xl", "xxl"] as const;
export type FlexSpacing = (typeof FLEX_SPACING)[number];

export const ALIGN_ITEMS_POSITION = ["baseline", "center", "end", "start", "stretch"] as const;
export type AlignItemsPosition = (typeof ALIGN_ITEMS_POSITION)[number];

export const FLEX_DIRECTION = ["column", "columnReverse", "row", "rowReverse"] as const;
export type FlexDirection = (typeof FLEX_DIRECTION)[number];

export const JUSTIFY_CONTENT_POSITION = [
  "center",
  "end",
  "start",
  "spaceAround",
  "spaceBetween",
  "spaceEvenly"
] as const;
export type JustifyContentPosition = (typeof JUSTIFY_CONTENT_POSITION)[number];