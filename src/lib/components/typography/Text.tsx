import { ReactNode } from "react";
import classNames from "classnames";
import { TEXT_SIZE } from "./types";

const TEXT_ALIGN = ["left", "center", "right"] as const;

type Props = {
  className?: string;
  id?: string;
  children?: ReactNode;
  size?: (typeof TEXT_SIZE)[number];
  align?: (typeof TEXT_ALIGN)[number];
  truncate?: boolean;
};

const alignToClassMap = {
  left: "vuiText--left",
  right: "vuiText--right",
  center: "vuiText--center"
} as const;

export const VuiText = ({ children, className, id, truncate, size = "s", align }: Props) => {
  const classes = classNames(
    "vuiText",
    `vuiText--${size}`,
    // Don't default to left alignment, so that the component inherits
    // whatever has been defined by an ancestor.
    align && alignToClassMap[align],
    {
      "vuiText--truncate": truncate
    },
    className
  );

  return (
    <div className={classes} id={id}>
      {children}
    </div>
  );
};
