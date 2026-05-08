import { ReactElement, ReactNode, forwardRef } from "react";
import classNames from "classnames";
import { getTrackingProps } from "../../utils/getTrackingProps";
import { BUTTON_SIZE } from "./types";
import { LinkProps } from "../link/types";
import { useVuiContext } from "../context/Context";
import { VuiSpinner } from "../spinner/Spinner";
import { SPINNER_COLOR } from "../spinner/types";
import { VuiTooltip } from "../tooltip/Tooltip";

const alignToClassMap = {
  left: "vuiBaseButton--alignLeft",
  center: "vuiBaseButton--alignCenter",
  right: "vuiBaseButton--alignRight"
};

const sizeToSpinnerSizeMap = {
  xs: "xs",
  s: "xs",
  m: "s",
  l: "m"
} as const;

export type BaseButtonProps = {
  children?: ReactNode;
  icon?: ReactElement | null;
  iconSide?: "left" | "right";
  align?: "left" | "center" | "right";
  className?: string;
  size?: (typeof BUTTON_SIZE)[number];
  fullWidth?: boolean;
  isSelected?: boolean;
  isInert?: boolean;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  onMouseOver?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  onMouseOut?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  onMouseMove?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  href?: LinkProps["href"];
  target?: LinkProps["target"];
  track?: LinkProps["track"];
  download?: LinkProps["download"];
  htmlFor?: string;
  tabIndex?: number;
  title?: string;
  isSubmit?: boolean;
  isLoading?: boolean;
  truncate?: boolean;
  "aria-label"?: string;
};

type Props = BaseButtonProps & {
  spinnerColor?: (typeof SPINNER_COLOR)[number];
};

export const BaseButton = forwardRef<HTMLButtonElement | null, Props>(
  (
    {
      children,
      icon,
      iconSide = "left",
      align = "center",
      className,
      size = "m",
      fullWidth,
      onClick,
      onMouseOver,
      onMouseOut,
      onMouseMove,
      tabIndex,
      isInert,
      isDisabled,
      href,
      target,
      track,
      htmlFor,
      isSubmit,
      isLoading,
      spinnerColor,
      truncate,
      "aria-label": ariaLabel,
      ...rest
    }: Props,
    ref
  ) => {
    const { createLink } = useVuiContext();

    const classes = classNames("vuiBaseButton", className, `vuiBaseButton--${size}`, alignToClassMap[align], {
      "vuiBaseButton-isInert": isInert,
      "vuiBaseButton-isDisabled": isDisabled,
      "vuiBaseButton--fullWidth": fullWidth,
      "vuiBaseButton--truncate": truncate,
      [`vuiBaseButton--${isLoading ? "left" : iconSide}`]: (Boolean(icon) || isLoading) && Boolean(children)
    });

    let iconContainer;

    if (isLoading) {
      iconContainer = (
        <span className="vuiBaseButtonIconContainer">
          <VuiSpinner color={spinnerColor} size={sizeToSpinnerSizeMap[size]} />
        </span>
      );
    } else if (icon) {
      iconContainer = <span className="vuiBaseButtonIconContainer">{icon}</span>;
    }

    let button;

    if (htmlFor) {
      // This is useful for controlling other elements, e.g. creating an <input type="file" />
      // for uploading files and adding a button to trigger it.

      button = (
        <label aria-label={ariaLabel} htmlFor={htmlFor} className={classes} tabIndex={tabIndex} {...rest}>
          {iconContainer}
          {children}
        </label>
      );
    } else if (href && !isDisabled) {
      // Anchor tags can't be disabled, so we'll just render a button instead
      // if isDisabled is true.

      const wrapperClasses = classNames("vuiBaseButtonLinkWrapper", {
        "vuiBaseButtonLinkWrapper--fullWidth": fullWidth
      });

      button = createLink({
        className: wrapperClasses,
        href,
        onClick,
        onMouseOver,
        onMouseOut,
        onMouseMove,
        children: (
          //* Wrap a button otherwise the flex layout breaks */}
          <button aria-label={ariaLabel} className={classes} tabIndex={-1} ref={ref}>
            {iconContainer}
            {children}
          </button>
        ),
        target,
        tabIndex,
        ...rest,
        ...getTrackingProps(track)
      });
    } else {
      const labelClasses = classNames({
        "vuiBaseButtonLabel--truncate": truncate
      });

      const props = {
        onClick,
        onMouseOver,
        onMouseOut,
        onMouseMove,
        tabIndex,
        type: isSubmit ? "submit" : "button",
        disabled: isDisabled,
        ...rest
      } as const;

      button = (
        <button aria-label={ariaLabel} className={classes} {...props} ref={ref}>
          {iconContainer}
          <span className={labelClasses}>{children}</span>
        </button>
      );
    }

    if (ariaLabel) {
      return <VuiTooltip tip={ariaLabel}>{button}</VuiTooltip>;
    }

    return button;
  }
);
