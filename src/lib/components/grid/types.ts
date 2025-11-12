import React from "react";

export type ResponsiveValue<T> = T | {
  default?: T; // fallback value that applies when no breakpoint matches
  sm?: T;      // applies from 0px up
  md?: T;      // > 500px container width
  lg?: T;      // > 800px container width
};

export const GRID_AUTO_FLOW = ["row", "column", "dense", "row dense", "column dense"] as const;
export type GridAutoFlow = (typeof GRID_AUTO_FLOW)[number];

export const GRID_ALIGN_ITEMS = ["start", "end", "center", "stretch", "baseline"] as const;
export type GridAlignItems = (typeof GRID_ALIGN_ITEMS)[number];

export const GRID_JUSTIFY_ITEMS = ["start", "end", "center", "stretch"] as const;
export type GridJustifyItems = (typeof GRID_JUSTIFY_ITEMS)[number];

export const GRID_ALIGN_CONTENT = [
  "start",
  "end",
  "center",
  "stretch",
  "space-around",
  "space-between",
  "space-evenly"
] as const;
export type GridAlignContent = (typeof GRID_ALIGN_CONTENT)[number];

export const GRID_JUSTIFY_CONTENT = [
  "start",
  "end",
  "center",
  "stretch",
  "space-around",
  "space-between",
  "space-evenly"
] as const;
export type GridJustifyContent = (typeof GRID_JUSTIFY_CONTENT)[number];

export const GRID_ALIGN_SELF = ["start", "end", "center", "stretch", "baseline"] as const;
export type GridAlignSelf = (typeof GRID_ALIGN_SELF)[number];

export const GRID_JUSTIFY_SELF = ["start", "end", "center", "stretch"] as const;
export type GridJustifySelf = (typeof GRID_JUSTIFY_SELF)[number];

export type GridSpan = number | "auto";
export type GridLine = number | "auto" | `span ${number}`;

export type SimpleGridColumns = number | Record<string, number>;

export interface GridItemProps {
  children?: React.ReactNode;
  area?: string;
  colSpan?: ResponsiveValue<GridSpan>;
  rowSpan?: GridSpan;
  colStart?: GridLine;
  colEnd?: GridLine;
  rowStart?: GridLine;
  rowEnd?: GridLine;
  alignSelf?: GridAlignSelf;
  justifySelf?: GridJustifySelf;
  className?: string;
}

export interface SimpleGridProps {
  children?: React.ReactNode;
  columns?: SimpleGridColumns;
  minChildWidth?: string;
  spacing?: string;
  spacingX?: string;
  spacingY?: string;
  className?: string;
}
