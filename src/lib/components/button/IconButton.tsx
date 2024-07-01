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
  onClick?: () => void;
  href?: LinkProps["href"];
  target?: LinkProps["target"];
  track?: LinkProps["track"];
  tabIndex?: number;
};

export const VuiIconButton = forwardRef<HTMLButtonElement | null, Props>(
  ({ className, icon, color = "primary", size = "m", onClick, href, target, track, tabIndex, ...rest }: Props, ref) => {
    const { createLink } = useVuiContext();

    const props = {
      className: classNames("vuiIconButton", className, `vuiIconButton--${color}`, `vuiIconButton--${size}`),
      onClick,
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
