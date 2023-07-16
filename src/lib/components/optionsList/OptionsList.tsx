import classNames from "classnames";
import { VuiOptionsListItem } from "./OptionsListItem";
import { OptionListItem } from "./types";

export type Props<T> = {
  options: OptionListItem<T>[];
  onSelectOption: (value: T) => void;
  selectedOption?: string;
  isSelectable?: boolean;
  isScrollable?: boolean;
};

// https://github.com/typescript-eslint/typescript-eslint/issues/4062
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const VuiOptionsList = <T extends unknown = unknown>({
  options,
  onSelectOption,
  selectedOption,
  isSelectable = false,
  isScrollable = false,
  ...rest
}: Props<T>) => {
  const classes = classNames("vuiOptionsList", {
    "vuiOptionsList--scrollable": isScrollable
  });

  return (
    <div className={classes} {...rest}>
      {options.map(({ value, label, href, onClick, color }) => (
        <VuiOptionsListItem
          key={label}
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
