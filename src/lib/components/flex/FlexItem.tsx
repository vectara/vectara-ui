import classNames from "classnames";
import { ReactNode } from "react";

const GROW = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

type Props = {
  children?: ReactNode;
  grow?: (typeof GROW)[number] | boolean;
  className?: string;
  truncate?: boolean;
};

export const VuiFlexItem = ({ children, grow, className, truncate, ...rest }: Props) => {
  const isGrowNone = grow === false;
  const classes = classNames(
    "vuiFlexItem",
    {
      [`vuiFlexItem--flexGrow${grow}`]: typeof grow === "number",
      "vuiFlexItem--flexGrowNone": isGrowNone,
      "vuiFlexItem--truncate": truncate
    },
    className
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
