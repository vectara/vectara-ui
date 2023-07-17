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

export const VuiButtonSecondary = forwardRef<HTMLButtonElement | null, Props>(
  ({ children, icon, color, size = "m", className, isSelected, ...rest }: Props, ref) => {
    const classes = classNames(className, "vuiButtonSecondary", `vuiButtonSecondary--${color}`, {
      "vuiButtonSecondary-isSelected": isSelected
    });

    const buttonIcon = createButtonIcon(icon, color, colorToIconColorMap);

    return (
      <BaseButton ref={ref} className={classes} icon={buttonIcon} size={size} {...rest}>
        {children}
      </BaseButton>
    );
  }
);
