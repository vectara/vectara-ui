import { forwardRef } from "react";
import classNames from "classnames";
import { BaseButton, BaseButtonProps } from "./BaseButton";
import { ButtonColor } from "./types";
import { createButtonIcon } from "./createButtonIcon";
import { SpinnerColor } from "../spinner/types";

export type Props = BaseButtonProps & {
  color: ButtonColor;
  noPadding?: boolean;
};

const colorToIconColorMap = {
  accent: "accent",
  primary: "primary",
  success: "success",
  danger: "danger",
  warning: "warning",
  neutral: "neutral",
  subdued: "subdued"
};

const colorToSpinnerColorMap: Record<ButtonColor, SpinnerColor> = {
  accent: "accent",
  primary: "primary",
  success: "success",
  danger: "danger",
  warning: "warning",
  neutral: "dark",
  subdued: "dark"
};

export const VuiButtonTertiary = forwardRef<HTMLButtonElement | null, Props>(
  ({ children, icon, color, size = "m", className, isSelected, isDisabled, noPadding, ...rest }: Props, ref) => {
    const classes = classNames(className, "vuiButtonTertiary", `vuiButtonTertiary--${color}`, {
      "vuiButtonTertiary-isSelected": isSelected,
      "vuiButtonTertiary-noPadding": noPadding
    });

    const buttonIcon = createButtonIcon(icon, size, color, colorToIconColorMap);

    return (
      <BaseButton
        ref={ref}
        className={classes}
        icon={buttonIcon}
        size={size}
        isDisabled={isDisabled}
        spinnerColor={colorToSpinnerColorMap[color]}
        {...rest}
      >
        {children}
      </BaseButton>
    );
  }
);
