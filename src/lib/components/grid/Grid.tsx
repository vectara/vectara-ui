import React from "react";
import classNames from "classnames";
import { FlexSpacing } from "../flex/types";
import {
  GridAlignItems,
  GridJustifyItems,
  GridAlignContent,
  GridJustifyContent,
  ResponsiveValue
} from "./types";

export const COLUMNS = [1, 2, 3, 4] as const;
export type Columns = (typeof COLUMNS)[number];

// Mapping objects for alignment properties
const alignItemsClassMap = {
  start: "vuiGrid--alignItemsStart",
  end: "vuiGrid--alignItemsEnd",
  center: "vuiGrid--alignItemsCenter",
  stretch: "vuiGrid--alignItemsStretch",
  baseline: "vuiGrid--alignItemsBaseline"
} as const;

const justifyItemsClassMap = {
  start: "vuiGrid--justifyItemsStart",
  end: "vuiGrid--justifyItemsEnd",
  center: "vuiGrid--justifyItemsCenter",
  stretch: "vuiGrid--justifyItemsStretch"
} as const;

const alignContentClassMap = {
  start: "vuiGrid--alignContentStart",
  end: "vuiGrid--alignContentEnd",
  center: "vuiGrid--alignContentCenter",
  stretch: "vuiGrid--alignContentStretch",
  "space-around": "vuiGrid--alignContentSpaceAround",
  "space-between": "vuiGrid--alignContentSpaceBetween",
  "space-evenly": "vuiGrid--alignContentSpaceEvenly"
} as const;

const justifyContentClassMap = {
  start: "vuiGrid--justifyContentStart",
  end: "vuiGrid--justifyContentEnd",
  center: "vuiGrid--justifyContentCenter",
  stretch: "vuiGrid--justifyContentStretch",
  "space-around": "vuiGrid--justifyContentSpaceAround",
  "space-between": "vuiGrid--justifyContentSpaceBetween",
  "space-evenly": "vuiGrid--justifyContentSpaceEvenly"
} as const;

type Props = {
  children?: React.ReactNode;
  columns?: Columns;
  spacing?: FlexSpacing;
  templateColumns?: ResponsiveValue<string>;
  templateRows?: string;
  gap?: FlexSpacing;
  rowGap?: FlexSpacing;
  columnGap?: FlexSpacing;
  alignItems?: GridAlignItems;
  justifyItems?: GridJustifyItems;
  alignContent?: GridAlignContent;
  justifyContent?: GridJustifyContent;
  inline?: boolean;
  fullWidth?: boolean;
  className?: string;
};

export const VuiGrid = ({
  children,
  columns = 2,
  spacing = "m",
  templateColumns,
  templateRows,
  gap,
  rowGap,
  columnGap,
  alignItems,
  justifyItems,
  alignContent,
  justifyContent,
  inline,
  fullWidth,
  className,
  ...rest
}: Props) => {
  // Use gap if provided, otherwise fall back to spacing for backward compatibility
  const effectiveGap = gap || spacing;

  const classes = classNames("vuiGridContainer", className);

  // Check if templateColumns is responsive
  const isResponsiveTemplateColumns = templateColumns && typeof templateColumns === "object";

  const contentClasses = classNames(
    "vuiGrid",
    {
      [`vuiGrid--${effectiveGap}`]: effectiveGap && !rowGap && !columnGap,
      [`vuiGrid--rowGap${rowGap}`]: rowGap,
      [`vuiGrid--columnGap${columnGap}`]: columnGap,
      [`vuiGrid--columns${columns}`]: !templateColumns && columns,
      "vuiGrid--inline": inline,
      "vuiGrid--fullWidth": fullWidth,
      "vuiGrid--responsive": isResponsiveTemplateColumns
    },
    alignItems && alignItemsClassMap[alignItems],
    justifyItems && justifyItemsClassMap[justifyItems],
    alignContent && alignContentClassMap[alignContent],
    justifyContent && justifyContentClassMap[justifyContent]
  );

  const gridStyle: React.CSSProperties & Record<string, any> = {};

  if (templateColumns) {
    if (typeof templateColumns === "string") {
      gridStyle.gridTemplateColumns = templateColumns;
    } else {
      // Implement cascading: each breakpoint inherits from the previous if not defined
      // If 'default' is specified, use it as the base fallback value
      const defaultValue = templateColumns.default;
      const smValue = templateColumns.sm || defaultValue;
      const mdValue = templateColumns.md || smValue;
      const lgValue = templateColumns.lg || mdValue;

      if (smValue) {
        gridStyle["--grid-template-sm"] = smValue;
      }
      if (mdValue) {
        gridStyle["--grid-template-md"] = mdValue;
      }
      if (lgValue) {
        gridStyle["--grid-template-lg"] = lgValue;
      }
    }
  }

  if (templateRows) {
    gridStyle.gridTemplateRows = templateRows;
  }

  return (
    <div className={classes} {...rest}>
      <div
        className={contentClasses}
        style={Object.keys(gridStyle).length > 0 ? gridStyle : undefined}
      >
        {children}
      </div>
    </div>
  );
};
