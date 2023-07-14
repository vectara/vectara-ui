import { forwardRef } from "react";
import classNames from "classnames";
import { BaseButton, Props as BaseButtonProps } from "./BaseButton";
import { ButtonColor } from "./types";
import { createButtonIcon } from "./createButtonIcon";

export type Props = {
  children?: BaseButtonProps["children"];
  icon?: BaseButtonProps["icon"];
  iconSide?: BaseButtonProps["iconSide"];
  color: ButtonColor;
  size?: BaseButtonProps["size"];
  className?: BaseButtonProps["className"];
  fullWidth?: BaseButtonProps["fullWidth"];
  isPressed?: boolean;
  isSelected?: boolean;
  onClick?: BaseButtonProps["onClick"];
  href?: BaseButtonProps["href"];
  target?: BaseButtonProps["target"];
  track?: BaseButtonProps["track"];
};

const colorToIconColorMap = {
  accent: "empty",
  primary: "empty",
  success: "empty",
  danger: "empty",
  warning: "empty",
  normal: "normal"
};

export const VuiButtonPrimary = forwardRef<HTMLButtonElement | null, Props>(
  ({ children, icon, color, size = "m", className, fullWidth, isPressed, isSelected, ...rest }: Props, ref) => {
    const classes = classNames(className, "vuiButtonPrimary", `vuiButtonPrimary--${color}`, {
      "vuiButtonPrimary--fullWidth": fullWidth,
      "vuiButtonPrimary--isPressed": isPressed, // TODO: Needs styles
      "vuiButtonPrimary--isSelected": isSelected // TODO: Needs styles
    });

    const buttonIcon = createButtonIcon(icon, color, colorToIconColorMap);

    return (
      <BaseButton ref={ref} className={classes} icon={buttonIcon} size={size} fullWidth={fullWidth} {...rest}>
        {children}
      </BaseButton>
    );
  }
);
