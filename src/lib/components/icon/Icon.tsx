import classNames from "classnames";
import { ReactNode, cloneElement } from "react";
import { IconContext } from "react-icons";
import { ICON_COLOR, ICON_SIZE, ICON_TYPE } from "./types";

const sizeToValueMap = {
  xs: "14",
  s: "16",
  m: "20",
  l: "24",
  xl: "28",
  xxl: "46",
  xxxl: "68"
};

type Props = {
  children: ReactNode;
  color?: (typeof ICON_COLOR)[number];
  className?: string;
  size?: (typeof ICON_SIZE)[number];
  inline?: boolean;
  type?: (typeof ICON_TYPE)[number];
  isEnclosed?: boolean;
};

export const VuiIcon = ({
  children,
  size = "m",
  color = "inherit",
  className,
  inline,
  type = "default",
  ...rest
}: Props) => {
  const innerClasses = classNames(className, "vuiIcon__inner");

  const classes = classNames("vuiIcon", `vuiIcon--${type}`, `vuiIcon--${color}`, {
    "vuiIcon--inline": inline
  });

  const icon = cloneElement(children as React.ReactElement, {
    size: sizeToValueMap[size]
  });

  return (
    <IconContext.Provider value={{ className: innerClasses }}>
      {/* Assume that icons will always be used in conjunction with tooltips or labels. */}
      <span className={classes} {...rest} aria-hidden="true">
        {icon}
      </span>
    </IconContext.Provider>
  );
};
