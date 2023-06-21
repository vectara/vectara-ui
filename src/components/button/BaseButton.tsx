import { ReactElement, ReactNode } from "react";
import classNames from "classnames";
import { Props as LinkProps } from "../link/Link";
import { Link } from "react-router-dom";
import { getTrackingProps } from "../../utils/getTrackingProps";

const SIZE = ["xs", "s", "m"] as const;

export type Props = {
  children?: ReactNode;
  ref: React.ForwardedRef<HTMLButtonElement | null>;
  icon?: ReactElement | null;
  iconSide?: "left" | "right";
  className?: string;
  size?: (typeof SIZE)[number];
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLAnchorElement, MouseEvent>) => void;
  href?: LinkProps["href"];
  target?: LinkProps["target"];
  track?: LinkProps["track"];
};

export const BaseButton = ({
  children,
  ref,
  icon,
  iconSide = "left",
  className,
  size,
  fullWidth,
  onClick,
  href,
  target,
  track,
  ...rest
}: Props) => {
  const classes = classNames("vuiBaseButton", className, `vuiBaseButton--${size}`, {
    "vuiBaseButton--fullWidth": fullWidth,
    [`vuiBaseButton--${iconSide}`]: Boolean(icon)
  });

  const props = {
    onClick,
    ...rest
  };

  const iconContainer = icon ? <span className="vuiBaseButtonIconContainer">{icon}</span> : null;

  if (href) {
    return (
      <Link className="vuiBaseButtonLinkWrapper" to={href} target={target} {...rest} {...getTrackingProps(track)}>
        {/* Wrap a button otherwise the flex layout breaks */}
        <button className={classes} tabIndex={-1} ref={ref}>
          {iconContainer}
          {children}
        </button>
      </Link>
    );
  }

  return (
    // @ts-expect-error HTMLButtonElement conflict with HTMLAnchorElement
    <button className={classes} {...props} ref={ref}>
      {iconContainer}
      {children}
    </button>
  );
};
