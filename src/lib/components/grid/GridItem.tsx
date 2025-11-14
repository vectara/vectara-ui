import React from "react";
import classNames from "classnames";
import { GridItemProps, GridSpan } from "./types";

const isResponsiveValue = <T,>(value: any): value is { default?: T; sm?: T; md?: T; lg?: T } => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const normalizeGridSpan = (value: GridSpan): string => {
  if (value === "auto") return "auto";
  return `span ${value}`;
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
  const isColSpanResponsive = isResponsiveValue(colSpan);

  const classes = classNames(
    "vuiGridItem",
    {
      [`vuiGridItem--colSpan${colSpan}`]:
        !isColSpanResponsive && colSpan && typeof colSpan === "number" && colSpan <= 12,
      [`vuiGridItem--rowSpan${rowSpan}`]: rowSpan && typeof rowSpan === "number" && rowSpan <= 12,
      [`vuiGridItem--colStart${colStart}`]: colStart && typeof colStart === "number" && colStart <= 12,
      [`vuiGridItem--colEnd${colEnd}`]: colEnd && typeof colEnd === "number" && colEnd <= 12,
      [`vuiGridItem--rowStart${rowStart}`]: rowStart && typeof rowStart === "number" && rowStart <= 12,
      [`vuiGridItem--rowEnd${rowEnd}`]: rowEnd && typeof rowEnd === "number" && rowEnd <= 12,
      [`vuiGridItem--alignSelf${alignSelf?.charAt(0).toUpperCase()}${alignSelf?.slice(1)}`]: alignSelf,
      [`vuiGridItem--justifySelf${justifySelf?.charAt(0).toUpperCase()}${justifySelf?.slice(1)}`]: justifySelf,
      "vuiGridItem--responsive": isColSpanResponsive
    },
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
