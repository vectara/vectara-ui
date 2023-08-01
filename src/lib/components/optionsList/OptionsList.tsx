import classNames from "classnames";
import { VuiOptionsListItem } from "./OptionsListItem";
import { OptionListItem } from "./types";

export type Props<T> = {
  className?: string;
  options: OptionListItem<T>[];
  onSelectOption?: (value: T) => void;
  selected?: T | T[];
  isSelectable?: boolean;
  isScrollable?: boolean;
};

// https://github.com/typescript-eslint/typescript-eslint/issues/4062
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const VuiOptionsList = <T extends unknown = unknown>({
  className,
  options,
  onSelectOption,
  selected,
  isSelectable = false,
  isScrollable = false,
  ...rest
}: Props<T>) => {
  const classes = classNames(
    "vuiOptionsList",
    {
      "vuiOptionsList--scrollable": isScrollable
    },
    className
  );

  return (
    <div className={classes} {...rest}>
      {options.map(({ value, label, href, onClick, color }) => {
        const isSelected = Array.isArray(selected) ? selected.includes(value) : value === selected;
        return (
          <VuiOptionsListItem
            key={label}
            value={value}
            label={label}
            color={color}
            href={href}
            onClick={() => {
              onClick?.(value);
              onSelectOption?.(value);
            }}
            isSelectable={isSelectable}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
};
