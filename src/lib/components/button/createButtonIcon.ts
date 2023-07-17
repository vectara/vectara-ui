import { cloneElement } from "react";
import { Props as BaseButtonProps } from "./BaseButton";
import { ButtonColor } from "./types";

export const createButtonIcon = (
  icon: BaseButtonProps["icon"],
  color: ButtonColor,
  colorToIconColorMap: Record<ButtonColor, string>,
  isDisabled?: boolean
) => {
  return icon
    ? cloneElement(icon, {
        size: "s",
        color: isDisabled ? colorToIconColorMap["neutral"] : colorToIconColorMap[color]
      })
    : null;
};
