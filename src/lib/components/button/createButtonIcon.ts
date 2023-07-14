import { cloneElement } from "react";
import { Props as BaseButtonProps } from "./BaseButton";
import { ButtonColor } from "./types";

export const createButtonIcon = (
  icon: BaseButtonProps["icon"],
  color: ButtonColor,
  colorToIconColorMap: Record<ButtonColor, string>
) => {
  return icon
    ? cloneElement(icon, {
        size: "s",
        color: colorToIconColorMap[color]
      })
    : null;
};
