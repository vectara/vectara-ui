import { forwardRef } from "react";
import classNames from "classnames";
import { BaseButton, Props as BaseButtonProps } from "./BaseButton";
import { ButtonColor } from "./types";
import { createButtonIcon } from "./createButtonIcon";

type Props = {
  children?: BaseButtonProps["children"];
  icon?: BaseButtonProps["icon"];
  iconSide?: BaseButtonProps["iconSide"];
  color: ButtonColor;
  size?: BaseButtonProps["size"];
  className?: BaseButtonProps["className"];
  fullWidth?: BaseButtonProps["fullWidth"];
  onClick?: BaseButtonProps["onClick"];
  href?: BaseButtonProps["href"];
  target?: BaseButtonProps["target"];
  track?: BaseButtonProps["track"];
};

const colorToIconColorMap = {
  accent: "accent",
  primary: "primary",
  success: "success",
  danger: "danger",
  warning: "warning",
  neutral: "neutral"
};

export const VuiButtonTertiary = forwardRef<HTMLButtonElement | null, Props>(
  ({ children, icon, color, size = "m", className, fullWidth, ...rest }: Props, ref) => {
    const classes = classNames(
      className,
      "vuiButtonTertiary",
      `vuiButtonTertiary--${color}`,
      `vuiButtonTertiary--${size}`
    );

    const buttonIcon = createButtonIcon(icon, color, colorToIconColorMap);

    return (
      <BaseButton ref={ref} className={classes} icon={buttonIcon} size={size} fullWidth={fullWidth} {...rest}>
        {children}
      </BaseButton>
    );
  }
);
