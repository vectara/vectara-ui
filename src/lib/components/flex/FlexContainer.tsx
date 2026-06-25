import { ReactNode } from "react";
import classNames from "classnames";
import { AlignItemsPosition, FlexDirection, FlexSpacing, JustifyContentPosition } from "./types";

const alignItemsToClassNameMap: Record<AlignItemsPosition, string> = {
  baseline: "vuiFlexContainer--alignItemsBaseline",
  center: "vuiFlexContainer--alignItemsCenter",
  end: "vuiFlexContainer--alignItemsEnd",
  start: "vuiFlexContainer--alignItemsStart",
  stretch: "vuiFlexContainer--alignItemsStretch"
};

const directionToClassNameMap: Record<FlexDirection, string> = {
  column: "vuiFlexContainer--directionColumn",
  columnReverse: "vuiFlexContainer--directionColumnReverse",
  row: "vuiFlexContainer--directionRow",
  rowReverse: "vuiFlexContainer--directionRowReverse"
};

const justifyContentToClassNameMap: Record<JustifyContentPosition, string> = {
  center: "vuiFlexContainer--justifyContentCenter",
  end: "vuiFlexContainer--justifyContentEnd",
  start: "vuiFlexContainer--justifyContentStart",
  spaceAround: "vuiFlexContainer--justifyContentSpaceAround",
  spaceBetween: "vuiFlexContainer--justifyContentSpaceBetween",
  spaceEvenly: "vuiFlexContainer--justifyContentSpaceEvenly"
};

const spacingToClassNameMap: Record<FlexSpacing, string> = {
  none: "vuiFlexContainer--spacingNone",
  xxs: "vuiFlexContainer--spacingXxs",
  xs: "vuiFlexContainer--spacingXs",
  s: "vuiFlexContainer--spacingS",
  m: "vuiFlexContainer--spacingM",
  l: "vuiFlexContainer--spacingL",
  xl: "vuiFlexContainer--spacingXl",
  xxl: "vuiFlexContainer--spacingXxl"
};

export type Props = {
  children?: ReactNode;
  alignItems?: AlignItemsPosition;
  direction?: FlexDirection;
  justifyContent?: JustifyContentPosition;
  spacing?: FlexSpacing;
  wrap?: boolean;
  className?: string;
  fullWidth?: boolean;
  inline?: boolean;
};

export const VuiFlexContainer = ({
  children,
  alignItems = "stretch",
  direction = "row",
  justifyContent = "start",
  spacing = "m",
  wrap,
  className,
  fullWidth,
  inline,
  ...rest
}: Props) => {
  const classes = classNames(
    className,
    "vuiFlexContainer",
    alignItemsToClassNameMap[alignItems],
    directionToClassNameMap[direction],
    justifyContentToClassNameMap[justifyContent],
    spacingToClassNameMap[spacing],
    {
      "vuiFlexContainer--wrap": wrap,
      "vuiFlexContainer--fullWidth": fullWidth,
      "vuiFlexContainer--inline": inline
    }
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
