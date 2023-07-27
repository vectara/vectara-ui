import { cloneElement } from "react";
import { Props as BaseButtonProps } from "./BaseButton";
import { ButtonColor } from "./types";

const sizeToIconSizeMap = {
  xs: "xs",
  s: "xs",
  m: "s"
};

export const createButtonIcon = (
  icon: BaseButtonProps["icon"],
  size: BaseButtonProps["size"],
  color: ButtonColor,
  colorToIconColorMap: Record<ButtonColor, string>
) => {
  return icon
    ? cloneElement(icon, {
        size: size ? sizeToIconSizeMap[size] : "s",
        color: icon.props.color === "inherit" ? colorToIconColorMap[color] : icon.props.color
      })
    : null;
};
