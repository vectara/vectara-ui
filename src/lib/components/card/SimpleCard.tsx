import classNames from "classnames";
import { useVuiContext } from "../context/Context";
import { MouseEvent } from "react";

type Props = {
  className?: string;
  fullHeight?: boolean;
  href?: string;
  onClick?: (e: MouseEvent) => void;
  padding?: "xxs" | "xs" | "s" | "m" | "l";
  children?: React.ReactNode;
};

export const VuiSimpleCard = ({ href, className, fullHeight, padding = "s", children, onClick, ...rest }: Props) => {
  const { createLink } = useVuiContext();

  const classes = classNames(
    "vuiSimpleCard",
    `vuiSimpleCard--${padding}`,
    {
      "vuiSimpleCard--interactive": href || onClick,
      "vuiSimpleCard--fullHeight": fullHeight
    },
    className
  );

  if (href) {
    return createLink({
      className: classes,
      href,
      onClick,
      children,
      ...rest
    });
  }

  if (onClick) {
    return (
      <button className={classes} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }

  return (
    <div className={classes} onClick={onClick} {...rest}>
      {children}
    </div>
  );
};
