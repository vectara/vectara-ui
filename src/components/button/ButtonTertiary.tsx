import { cloneElement, forwardRef } from "react";
import classNames from "classnames";
import { BaseButton, Props as BaseButtonProps } from "./BaseButton";

const COLOR = ["accent", "primary", "danger", "warning", "normal"] as const;

type Props = {
  children?: BaseButtonProps["children"];
  icon?: BaseButtonProps["icon"];
  iconSide?: BaseButtonProps["iconSide"];
  color: (typeof COLOR)[number];
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
  danger: "danger",
  warning: "warning",
  normal: "normal"
};

export const VuiButtonTertiary = forwardRef<HTMLButtonElement | null, Props>(
  ({ children, icon, color, size = "m", className, fullWidth, ...rest }: Props, ref) => {
    const classes = classNames(
      className,
      "vuiButtonTertiary",
      `vuiButtonTertiary--${color}`,
      `vuiButtonTertiary--${size}`
    );

    const styledIcon = icon
      ? cloneElement(icon, {
          size: 18,
          color: colorToIconColorMap[color]
        })
      : null;

    return (
      <BaseButton ref={ref} className={classes} icon={styledIcon} size={size} fullWidth={fullWidth} {...rest}>
        {children}
      </BaseButton>
    );
  }
);
