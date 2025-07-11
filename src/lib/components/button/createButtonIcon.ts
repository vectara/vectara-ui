import { cloneElement, ReactElement } from "react";
import { BaseButtonProps } from "./BaseButton";
import { ButtonColor } from "./types";
import { VuiIcon } from "../icon/Icon";

const sizeToIconSizeMap = {
  xs: "xs",
  s: "xs",
  m: "s",
  l: "m"
};

const defaultColorToIconColorMap = {
  accent: "accent",
  primary: "primary",
  success: "success",
  danger: "danger",
  warning: "warning",
  neutral: "neutral",
  subdued: "subdued"
};

/**
 * Checks if the provided element is a VuiIcon component
 */
const isVuiIcon = (element: ReactElement): boolean => {
  return Boolean(element && element.type === VuiIcon);
};

export const createButtonIcon = (
  icon: BaseButtonProps["icon"],
  size: BaseButtonProps["size"],
  color: ButtonColor,
  colorToIconColorMap: Record<ButtonColor, string> = defaultColorToIconColorMap
) => {
  if (!icon) {
    return null;
  }

  if (!isVuiIcon(icon)) {
    throw new Error(
      "Button components: The icon prop must be an instance of VuiIcon. Make sure you are passing a VuiIcon component and not a raw icon."
    );
  }

  return cloneElement(icon, {
    size: size ? sizeToIconSizeMap[size] : "s",
    color: icon.props.color === "inherit" ? colorToIconColorMap[color] : icon.props.color
  });
};
