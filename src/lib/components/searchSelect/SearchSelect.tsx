import { useEffect, useState } from "react";
import { Props as OptionsListProps, VuiOptionsList } from "../optionsList/OptionsList";
import { Props as PopoverProps, VuiPopover } from "../popover/Popover";
import { OptionListItem } from "../optionsList/types";
import { VuiTextInput } from "../form";
import { VuiSpacer } from "../spacer/Spacer";
import { sortSelectedOptions } from "./sortSelectedOptions";

type Props<T> = Pick<PopoverProps, "isOpen" | "setIsOpen"> &
  Pick<OptionsListProps<T>, "options"> & {
    children: PopoverProps["button"];
    title?: string;
    searchValue: string;
    setSearchValue: (searchValue: string) => void;
    asyncSearch?: {
      isSearching?: boolean;
      onSearchChange?: (searchValue: string) => void;
      onLazyLoad: () => void;
    };
    selectedOptions: T[];
    onSelect: (selected: T[]) => void;
    isMultiSelect?: boolean;
  };

// https://github.com/typescript-eslint/typescript-eslint/issues/4062
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const VuiSearchSelect = <T extends unknown = unknown>({
  children,
  title,
  isOpen,
  setIsOpen,
  options,
  searchValue,
  setSearchValue,
  asyncSearch,
  selectedOptions,
  onSelect,
  isMultiSelect = true
}: Props<T>) => {
  const [orderedOptions, setOrderedOptions] = useState<OptionListItem<T>[]>([]);

  // Async-only. Cache all options in case they get selected.
  const [optionsCache, setOptionsCache] = useState<Record<string, OptionListItem<T>>>({});

  const addOptionsToCache = (optionsToAdd: Array<OptionListItem<T>>) => {
    setOptionsCache((prev) => {
      const newOptionsCache = { ...prev };

      optionsToAdd.forEach((option) => {
        newOptionsCache[option.value as string] = option;
      });

      return newOptionsCache;
    });
  };

  useEffect(() => {
    // When the popover is opened, initialize the selected options,
    // and sort the options so the selected ones are on top.
    if (isOpen) {
      if (asyncSearch) addOptionsToCache(options);
      const isAsyncSearchInactive = asyncSearch && !searchValue;
      const newOrderedOptions = sortSelectedOptions(
        selectedOptions,
        options,
        isAsyncSearchInactive ? optionsCache : undefined
      );
      setOrderedOptions(newOrderedOptions);
    }
  }, [isOpen, options]);

  const onSelectOption = (value: T) => {
    if (isMultiSelect) {
      const updatedSelectedOptions = selectedOptions.concat();
      const index = selectedOptions.findIndex((item) => item === value);

      if (index === -1) {
        // Select item.
        updatedSelectedOptions.push(value);
      } else {
        // Delect item.
        updatedSelectedOptions.splice(index, 1);
      }

      onSelect(updatedSelectedOptions);
    } else {
      if (selectedOptions[0] === value) {
        // If the user clicks on the selected option, deselect it.
        onSelect([]);
        return;
      }

      onSelect([value]);
    }
  };

  // If onSearchChange is provided, we don't filter the options here because
  // we assume the consumer has already filtered them.
  const visibleOptions = asyncSearch?.onSearchChange
    ? orderedOptions
    : orderedOptions.filter((option) => {
        if (!searchValue.trim()) return true;
        if (option.label.toLowerCase().includes(searchValue.toLowerCase())) return true;
        return false;
      });

  return (
    <VuiPopover
      isOpen={isOpen}
      setIsOpen={(isOpen: boolean) => {
        setIsOpen(isOpen);
        if (!isOpen) setSearchValue("");
      }}
      button={children}
      header={title}
    >
      <div className="vuiSearchSelect__search">
        <VuiTextInput
          placeholder="Search"
          value={searchValue}
          onChange={(event) => {
            const { value } = event.target;
            asyncSearch?.onSearchChange?.(value);
            setSearchValue(value);
          }}
        />
        <VuiSpacer size="xxs" />
      </div>

      <VuiOptionsList
        isSelectable
        isScrollable
        onScrollToBottom={asyncSearch?.onLazyLoad}
        onSelectOption={onSelectOption}
        selected={selectedOptions}
        options={visibleOptions}
        isLoading={asyncSearch?.isSearching}
      />
    </VuiPopover>
  );
};
