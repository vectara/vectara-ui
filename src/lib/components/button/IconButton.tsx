import classNames from "classnames";
import { ReactElement, forwardRef } from "react";
import { getTrackingProps } from "../../utils/getTrackingProps";
import { ButtonColor, BUTTON_SIZE } from "./types";
import { createButtonIcon } from "./createButtonIcon";
import { LinkProps } from "../link/types";
import { useVuiContext } from "../context/Context";

type Props = {
  className?: string;
  icon: ReactElement;
  "aria-label": string;
  color?: ButtonColor;
  size?: (typeof BUTTON_SIZE)[number];
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  onMouseOver?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  onMouseOut?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  onMouseMove?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  href?: LinkProps["href"];
  target?: LinkProps["target"];
  track?: LinkProps["track"];
  tabIndex?: number;
  isSelected?: boolean;
};

export const VuiIconButton = forwardRef<HTMLButtonElement | null, Props>(
  (
    {
      className,
      icon,
      color = "primary",
      size = "m",
      onClick,
      onMouseOver,
      onMouseOut,
      onMouseMove,
      href,
      target,
      track,
      tabIndex,
      isSelected = false,
      ...rest
    }: Props,
    ref
  ) => {
    const { createLink } = useVuiContext();

    const props = {
      className: classNames("vuiIconButton", className, `vuiIconButton--${color}`, `vuiIconButton--${size}`, {
        [`vuiIconButton--${color}-isSelected`]: isSelected
      }),
      onClick,
      onMouseOver,
      onMouseOut,
      onMouseMove,
      tabIndex,
      ...rest
    };

    const buttonIcon = createButtonIcon(icon, size, color);

    if (href) {
      return createLink({
        href,
        target,
        ...props,
        ...getTrackingProps(track),
        children: <button ref={ref}>{buttonIcon}</button>
      });
    }

    return (
      <button {...props} ref={ref}>
        {buttonIcon}
      </button>
    );
  }
);
