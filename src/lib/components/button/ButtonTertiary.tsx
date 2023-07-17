import { forwardRef } from "react";
import classNames from "classnames";
import { BaseButton, Props as BaseButtonProps } from "./BaseButton";
import { ButtonColor } from "./types";
import { createButtonIcon } from "./createButtonIcon";

export type Props = BaseButtonProps & {
  color: ButtonColor;
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
  ({ children, icon, color, size = "m", className, isSelected, isDisabled, ...rest }: Props, ref) => {
    const classes = classNames(className, "vuiButtonTertiary", `vuiButtonTertiary--${color}`, {
      "vuiButtonTertiary-isSelected": isSelected,
      "vuiButtonTertiary-isDisabled": isDisabled
    });

    const buttonIcon = createButtonIcon(icon, color, colorToIconColorMap, isDisabled);

    return (
      <BaseButton ref={ref} className={classes} icon={buttonIcon} size={size} isDisabled={isDisabled} {...rest}>
        {children}
      </BaseButton>
    );
  }
);
