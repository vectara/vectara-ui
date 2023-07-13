import classNames from "classnames";
import { VuiOptionsListItem } from "./OptionsListItem";
import { OptionListItem } from "./types";

type Props = {
  options: OptionListItem[];
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
      {options.map(({ value, label, href, onClick, color }) => (
        <VuiOptionsListItem
          key={value}
          value={value}
          label={label}
          color={color}
          href={href}
          onClick={onClick ?? onSelectOption}
          isSelectable={isSelectable}
          isSelected={value === selectedOption}
        />
      ))}
    </div>
  );
};
