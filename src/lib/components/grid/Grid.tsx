import React from "react";
import classNames from "classnames";
import { FlexSpacing } from "../flex/types";
import { ResponsiveGridValue } from "./types";

export const COLUMNS = [1, 2, 3, 4] as const;
export type Columns = (typeof COLUMNS)[number];

const GRID_ALIGN_ITEMS = ["start", "end", "center", "stretch", "baseline"] as const;
type GridAlignItems = (typeof GRID_ALIGN_ITEMS)[number];

const GRID_JUSTIFY_ITEMS = ["start", "end", "center", "stretch"] as const;
type GridJustifyItems = (typeof GRID_JUSTIFY_ITEMS)[number];

const GRID_ALIGN_CONTENT = [
  "start",
  "end",
  "center",
  "stretch",
  "spaceAround",
  "spaceBetween",
  "spaceEvenly"
] as const;
type GridAlignContent = (typeof GRID_ALIGN_CONTENT)[number];

const GRID_JUSTIFY_CONTENT = [
  "start",
  "end",
  "center",
  "stretch",
  "spaceAround",
  "spaceBetween",
  "spaceEvenly"
] as const;
type GridJustifyContent = (typeof GRID_JUSTIFY_CONTENT)[number];

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
  spaceAround: "vuiGrid--alignContentSpaceAround",
  spaceBetween: "vuiGrid--alignContentSpaceBetween",
  spaceEvenly: "vuiGrid--alignContentSpaceEvenly"
} as const;

const justifyContentClassMap = {
  start: "vuiGrid--justifyContentStart",
  end: "vuiGrid--justifyContentEnd",
  center: "vuiGrid--justifyContentCenter",
  stretch: "vuiGrid--justifyContentStretch",
  spaceAround: "vuiGrid--justifyContentSpaceAround",
  spaceBetween: "vuiGrid--justifyContentSpaceBetween",
  spaceEvenly: "vuiGrid--justifyContentSpaceEvenly"
} as const;

type Props = {
  children?: React.ReactNode;
  columns?: Columns;
  spacing?: FlexSpacing;
  templateColumns?: ResponsiveGridValue<string>;
  templateRows?: string;
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
  alignItems,
  justifyItems,
  alignContent,
  justifyContent,
  inline,
  fullWidth,
  className,
  ...rest
}: Props) => {

  const classes = classNames("vuiGridContainer", className);

  const isResponsiveTemplateColumns = templateColumns && typeof templateColumns === "object";

  const contentClasses = classNames(
    "vuiGrid",
    {
      [`vuiGrid--${spacing}`]: spacing,
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
