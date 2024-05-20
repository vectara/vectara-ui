import { cloneElement } from "react";
import { BiCheck } from "react-icons/bi";
import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIcon } from "../icon/Icon";
import { OptionListItem } from "./types";
import { useVuiContext } from "../context/Context";
import { LinkProps } from "../link/types";

export const colorIcon = (icon: OptionListItem<string>["icon"], color: OptionListItem<string>["color"]) => {
  return icon
    ? cloneElement(icon, {
        color,
        size: "s"
      })
    : null;
};

type Props<T> = OptionListItem<T> & {
  isSelectable?: boolean;
  isSelected?: boolean;
  target?: LinkProps["target"];
};

// https://github.com/typescript-eslint/typescript-eslint/issues/4062
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const VuiOptionsListItem = <T extends unknown = unknown>({
  value,
  label,
  icon,
  color = "neutral",
  href,
  target,
  onClick,
  isSelectable,
  isSelected,
  testId,
  ...rest
}: Props<T>) => {
  const { createLink } = useVuiContext();

  const labelContent = icon ? (
    <VuiFlexContainer alignItems="center" spacing="xs">
      <VuiFlexItem grow={false} shrink={false}>
        {colorIcon(icon, color)}
      </VuiFlexItem>
      <VuiFlexItem grow={1}>{label}</VuiFlexItem>
    </VuiFlexContainer>
  ) : (
    label
  );

  const content = (
    <VuiFlexContainer alignItems="center" spacing="xs">
      {isSelectable && (
        <VuiFlexItem grow={false}>
          <VuiIcon className={isSelected ? "" : "vuiOptionsListItem__selected--unselected"} color="subdued" size="s">
            <BiCheck />
          </VuiIcon>
        </VuiFlexItem>
      )}
      <VuiFlexItem grow={false}>{labelContent}</VuiFlexItem>
    </VuiFlexContainer>
  );

  const classes = classNames("vuiOptionsListItem", `vuiOptionsListItem--${color}`);

  if (href) {
    return createLink({
      className: classes,
      href,
      target,
      onClick: () => onClick?.(value),
      "data-testid": testId,
      children: content,
      ...rest
    });
  }

  return (
    <button className={classes} onClick={() => onClick?.(value)} data-testid={testId} {...rest}>
      {content}
    </button>
  );
};
