import React from "react";
import { Link } from "react-router-dom";
import { BiCheck } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIcon } from "../icon/Icon";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { OptionListItem } from "./types";

type Props = OptionListItem & {
  isSelectable?: boolean;
  isSelected?: boolean;
};

export const VuiOptionsListItem = ({
  value,
  label,
  color = "normal",
  href,
  onClick,
  isSelectable,
  isSelected,
  ...rest
}: Props) => {
  const content = (
    <VuiFlexContainer alignItems="center" spacing="xs">
      {isSelectable && (
        <VuiFlexItem grow={false}>
          <VuiIcon className={isSelected ? "" : "vuiOptionsListItem__selected--unselected"} color="accent" size="s">
            <BiCheck />
          </VuiIcon>
        </VuiFlexItem>
      )}
      <VuiFlexItem grow={false}>
        <VuiText>
          <VuiTextColor color={color}>
            <p>{label}</p>
          </VuiTextColor>
        </VuiText>
      </VuiFlexItem>
    </VuiFlexContainer>
  );

  if (href) {
    return (
      <Link className="vuiOptionsListItem" to={href} onClick={() => onClick?.(value)} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className="vuiOptionsListItem" onClick={() => onClick?.(value)} {...rest}>
      {content}
    </button>
  );
};
