import React from "react";
import classNames from "classnames";
import { FlexSpacing } from "../flex/types";
import { VuiGrid } from "./Grid";

type Props = {
  children?: React.ReactNode;
  columns?: number | Record<string, number>;
  minChildWidth?: string;
  spacing?: FlexSpacing;
  className?: string;
};

export const VuiSimpleGrid = ({
  children,
  columns,
  minChildWidth,
  spacing = "m",
  className,
  ...rest
}: Props) => {
  let templateColumns: string | undefined;

  if (minChildWidth) {
    // Use auto-fit with minmax for responsive behavior
    templateColumns = `repeat(auto-fit, minmax(${minChildWidth}, 1fr))`;
  } else if (typeof columns === "number") {
    templateColumns = `repeat(${columns}, 1fr)`;
  } else if (columns && typeof columns === "object") {
    // TODO: Responsive columns object - would need media queries or container queries
    // For now, just use the first value as a fallback
    const firstValue = Object.values(columns)[0];
    templateColumns = `repeat(${firstValue}, 1fr)`;
  }

  const classes = classNames("vuiSimpleGrid", className);

  return (
    <VuiGrid
      templateColumns={templateColumns}
      spacing={spacing}
      className={classes}
      {...rest}
    >
      {children}
    </VuiGrid>
  );
};
