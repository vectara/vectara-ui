import React from "react";
import classNames from "classnames";
import { FlexSpacing } from "../flex/types";
import {
  GridAutoFlow,
  GridAlignItems,
  GridJustifyItems,
  GridAlignContent,
  GridJustifyContent,
  ResponsiveValue
} from "./types";

export const COLUMNS = [1, 2, 3, 4] as const;
export type Columns = (typeof COLUMNS)[number];

type Props = {
  children?: React.ReactNode;
  columns?: Columns;
  spacing?: FlexSpacing;
  // New grid layout props
  templateColumns?: ResponsiveValue<string>;
  templateRows?: string;
  templateAreas?: string;
  autoFlow?: GridAutoFlow;
  autoColumns?: string;
  autoRows?: string;
  // Gap control (enhanced)
  gap?: FlexSpacing; // Unified gap (alias for spacing)
  rowGap?: FlexSpacing; // Individual row gap
  columnGap?: FlexSpacing; // Individual column gap
  // Alignment
  alignItems?: GridAlignItems;
  justifyItems?: GridJustifyItems;
  alignContent?: GridAlignContent;
  justifyContent?: GridJustifyContent;
  // Display options
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
  templateAreas,
  autoFlow,
  autoColumns,
  autoRows,
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

  const contentClasses = classNames(
    "vuiGrid",
    // Gap classes
    {
      [`vuiGrid--${effectiveGap}`]: effectiveGap && !rowGap && !columnGap,
      [`vuiGrid--rowGap${rowGap}`]: rowGap,
      [`vuiGrid--columnGap${columnGap}`]: columnGap,
      // Legacy columns class (only used if templateColumns not provided)
      [`vuiGrid--columns${columns}`]: !templateColumns && columns,
      // Auto flow
      [`vuiGrid--autoFlow${autoFlow?.replace(/\s/g, "-")}`]: autoFlow,
      // Alignment
      [`vuiGrid--alignItems${alignItems?.charAt(0).toUpperCase()}${alignItems?.slice(1)}`]: alignItems,
      [`vuiGrid--justifyItems${justifyItems?.charAt(0).toUpperCase()}${justifyItems?.slice(1)}`]: justifyItems,
      [`vuiGrid--alignContent${alignContent?.charAt(0).toUpperCase()}${alignContent?.slice(1)}`]: alignContent,
      [`vuiGrid--justifyContent${justifyContent?.charAt(0).toUpperCase()}${justifyContent?.slice(1)}`]: justifyContent,
      // Display options
      "vuiGrid--inline": inline,
      "vuiGrid--fullWidth": fullWidth
    }
  );

  const gridStyle: React.CSSProperties & Record<string, any> = {};
  const dataAttributes: Record<string, string> = {};

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
        dataAttributes["data-responsive-sm"] = "true";
      }
      if (mdValue) {
        gridStyle["--grid-template-md"] = mdValue;
        dataAttributes["data-responsive-md"] = "true";
      }
      if (lgValue) {
        gridStyle["--grid-template-lg"] = lgValue;
        dataAttributes["data-responsive-lg"] = "true";
      }
    }
  }

  if (templateRows) {
    gridStyle.gridTemplateRows = templateRows;
  }

  if (templateAreas) {
    gridStyle.gridTemplateAreas = templateAreas;
  }

  if (autoColumns) {
    gridStyle.gridAutoColumns = autoColumns;
  }

  if (autoRows) {
    gridStyle.gridAutoRows = autoRows;
  }

  return (
    <div className={classes} {...rest}>
      <div
        className={contentClasses}
        style={Object.keys(gridStyle).length > 0 ? gridStyle : undefined}
        {...dataAttributes}
      >
        {children}
      </div>
    </div>
  );
};
