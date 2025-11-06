import React from "react";
import classNames from "classnames";
import { GridItemProps } from "./types";

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
  const classes = classNames(
    "vuiGridItem",
    {
      // Span classes
      [`vuiGridItem--colSpan${colSpan}`]: colSpan && typeof colSpan === "number" && colSpan <= 12,
      [`vuiGridItem--rowSpan${rowSpan}`]: rowSpan && typeof rowSpan === "number" && rowSpan <= 12,
      // Position classes
      [`vuiGridItem--colStart${colStart}`]: colStart && typeof colStart === "number" && colStart <= 12,
      [`vuiGridItem--colEnd${colEnd}`]: colEnd && typeof colEnd === "number" && colEnd <= 12,
      [`vuiGridItem--rowStart${rowStart}`]: rowStart && typeof rowStart === "number" && rowStart <= 12,
      [`vuiGridItem--rowEnd${rowEnd}`]: rowEnd && typeof rowEnd === "number" && rowEnd <= 12,
      // Alignment classes
      [`vuiGridItem--alignSelf${alignSelf?.charAt(0).toUpperCase()}${alignSelf?.slice(1)}`]: alignSelf,
      [`vuiGridItem--justifySelf${justifySelf?.charAt(0).toUpperCase()}${justifySelf?.slice(1)}`]: justifySelf
    },
    className
  );

  const style: React.CSSProperties = {};

  if (area) {
    style.gridArea = area;
  }

  // Handle span values that are auto or > 12
  if (colSpan === "auto" || (typeof colSpan === "number" && colSpan > 12)) {
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