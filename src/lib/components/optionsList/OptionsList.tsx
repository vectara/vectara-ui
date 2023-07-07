import classNames from "classnames";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { TextColor } from "../typography/types";
import { VuiOptionsListItem } from "./OptionsListItem";

type Props = {
  options: {
    value: string;
    label: string;
    color?: TextColor;
  }[];
  onSelectOption: (value: string) => void;
  selectedOption?: string;
  isSelectable?: boolean;
  isScrollable?: boolean;
};

export const VuiOptionsList = ({
  options,
  onSelectOption,
  selectedOption,
  isSelectable = false,
  isScrollable = false,
  ...rest
}: Props) => {
  const classes = classNames("vuiOptionsList", {
    "vuiOptionsList--scrollable": isScrollable
  });

  return (
    <div className={classes} {...rest}>
      {options.map(({ value, label, color = "normal" }) => (
        <VuiOptionsListItem
          key={value}
          value={value}
          onClick={onSelectOption}
          isSelectable={isSelectable}
          isSelected={value === selectedOption}
        >
          <VuiText>
            <VuiTextColor color={color}>
              <p>{label}</p>
            </VuiTextColor>
          </VuiText>
        </VuiOptionsListItem>
      ))}
    </div>
  );
};
