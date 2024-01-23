import { cloneElement } from "react";
import { Link } from "react-router-dom";
import { BiCheck } from "react-icons/bi";
import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIcon } from "../icon/Icon";
import { OptionListItem } from "./types";

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
  isAnchor,
  ...rest
}: Props<T>) => {
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
          <VuiIcon className={isSelected ? "" : "vuiOptionsListItem__selected--unselected"} color="accent" size="s">
            <BiCheck />
          </VuiIcon>
        </VuiFlexItem>
      )}
      <VuiFlexItem grow={false}>{labelContent}</VuiFlexItem>
    </VuiFlexContainer>
  );

  const classes = classNames("vuiOptionsListItem", `vuiOptionsListItem--${color}`);

  if (href) {
    // Uncouple from react-router.
    const LinkEl = isAnchor ? "a" : Link;

    const linkProps: any = {
      className: classes,
      target,
      onClick: () => onClick?.(value),
      "data-testid": testId,
      ...rest
    };

    if (isAnchor) {
      linkProps.href = href;
    } else {
      linkProps.to = href;
    }

    return <LinkEl {...linkProps}>{content}</LinkEl>;
  }

  return (
    <button className={classes} onClick={() => onClick?.(value)} data-testid={testId} {...rest}>
      {content}
    </button>
  );
};
