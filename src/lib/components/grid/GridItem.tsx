import React from "react";
import classNames from "classnames";
import { ResponsiveGridValue } from "./types";

const GRID_ALIGN_SELF = ["start", "end", "center", "stretch", "baseline"] as const;
type GridAlignSelf = (typeof GRID_ALIGN_SELF)[number];

const GRID_JUSTIFY_SELF = ["start", "end", "center", "stretch"] as const;
type GridJustifySelf = (typeof GRID_JUSTIFY_SELF)[number];

type GridSpan = number | "auto";
type GridLine = number | "auto" | `span ${number}`;

type GridItemProps = {
  children?: React.ReactNode;
  area?: string;
  colSpan?: ResponsiveGridValue<GridSpan>;
  rowSpan?: GridSpan;
  colStart?: GridLine;
  colEnd?: GridLine;
  rowStart?: GridLine;
  rowEnd?: GridLine;
  alignSelf?: GridAlignSelf;
  justifySelf?: GridJustifySelf;
  className?: string;
};

// Mapping objects for alignment properties
const alignSelfClassMap = {
  start: "vuiGridItem--alignSelfStart",
  end: "vuiGridItem--alignSelfEnd",
  center: "vuiGridItem--alignSelfCenter",
  stretch: "vuiGridItem--alignSelfStretch",
  baseline: "vuiGridItem--alignSelfBaseline"
} as const;

const justifySelfClassMap = {
  start: "vuiGridItem--justifySelfStart",
  end: "vuiGridItem--justifySelfEnd",
  center: "vuiGridItem--justifySelfCenter",
  stretch: "vuiGridItem--justifySelfStretch"
} as const;

const isResponsiveGridValue = <T,>(value: any): value is { default?: T; sm?: T; md?: T; lg?: T } => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const normalizeGridSpan = (value: GridSpan): string => {
  if (value === "auto") return "auto";
  return `span ${value}`;
};

// Helper to check if a grid value is a number within the valid range for CSS classes
const isGridValueInRange = (value: unknown, maxValue = 12): value is number => {
  return typeof value === "number" && value >= 1 && value <= maxValue;
};

export const VuiGridItem = ({
  children,
  area,
  colSpan,
  rowSpan,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  alignSelf,
  justifySelf,
  className,
  ...rest
}: GridItemProps) => {
  const isColSpanResponsive = isResponsiveGridValue(colSpan);

  const classes = classNames(
    "vuiGridItem",
    {
      [`vuiGridItem--colSpan${colSpan}`]: !isColSpanResponsive && isGridValueInRange(colSpan),
      [`vuiGridItem--rowSpan${rowSpan}`]: isGridValueInRange(rowSpan),
      [`vuiGridItem--colStart${colStart}`]: isGridValueInRange(colStart),
      [`vuiGridItem--colEnd${colEnd}`]: isGridValueInRange(colEnd),
      [`vuiGridItem--rowStart${rowStart}`]: isGridValueInRange(rowStart),
      [`vuiGridItem--rowEnd${rowEnd}`]: isGridValueInRange(rowEnd),
      "vuiGridItem--responsive": isColSpanResponsive
    },
    alignSelf && alignSelfClassMap[alignSelf],
    justifySelf && justifySelfClassMap[justifySelf],
    className
  );

  const style: React.CSSProperties & Record<string, any> = {};

  if (area) {
    style.gridArea = area;
  }

  if (isColSpanResponsive) {
    // Implement cascading: each breakpoint inherits from the previous if not defined
    // If 'default' is specified, use it as the base fallback value
    const defaultValue = colSpan.default;
    const smValue = colSpan.sm !== undefined ? colSpan.sm : defaultValue;
    const mdValue = colSpan.md !== undefined ? colSpan.md : smValue;
    const lgValue = colSpan.lg !== undefined ? colSpan.lg : mdValue;

    if (smValue !== undefined) {
      style["--grid-item-colSpan-sm"] = normalizeGridSpan(smValue);
    }
    if (mdValue !== undefined) {
      style["--grid-item-colSpan-md"] = normalizeGridSpan(mdValue);
    }
    if (lgValue !== undefined) {
      style["--grid-item-colSpan-lg"] = normalizeGridSpan(lgValue);
    }
  } else if (colSpan === "auto" || (typeof colSpan === "number" && colSpan > 12)) {
    style.gridColumn = colSpan === "auto" ? "auto" : `span ${colSpan}`;
  }

  if (rowSpan === "auto" || (typeof rowSpan === "number" && rowSpan > 12)) {
    style.gridRow = rowSpan === "auto" ? "auto" : `span ${rowSpan}`;
  }

  // Handle position values that are strings or > 12
  if (colStart) {
    if (typeof colStart === "string" || colStart > 12) {
      style.gridColumnStart = colStart;
    }
  }

  if (colEnd) {
    if (typeof colEnd === "string" || colEnd > 12) {
      style.gridColumnEnd = colEnd;
    }
  }

  if (rowStart) {
    if (typeof rowStart === "string" || rowStart > 12) {
      style.gridRowStart = rowStart;
    }
  }

  if (rowEnd) {
    if (typeof rowEnd === "string" || rowEnd > 12) {
      style.gridRowEnd = rowEnd;
    }
  }

  return (
    <div className={classes} style={Object.keys(style).length > 0 ? style : undefined} {...rest}>
      {children}
    </div>
  );
};
