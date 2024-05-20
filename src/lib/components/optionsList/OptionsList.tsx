import classNames from "classnames";
import { VuiOptionsListItem } from "./OptionsListItem";
import { OptionListItem } from "./types";
import { useEffect, useRef } from "react";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiSpinner } from "../spinner/Spinner";
import { VuiText } from "../typography/Text";
import { VuiSpacer } from "../spacer/Spacer";

const SIZE = ["s", "m", "l"] as const;

export type Props<T> = {
  className?: string;
  options: OptionListItem<T>[];
  onSelectOption?: (value: T) => void;
  selected?: T | T[];
  onScrollToBottom?: () => void;
  isSelectable?: boolean;
  isScrollable?: boolean;
  size?: (typeof SIZE)[number];
  isLoading?: boolean;
};

// https://github.com/typescript-eslint/typescript-eslint/issues/4062
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const VuiOptionsList = <T extends unknown = unknown>({
  className,
  options,
  onSelectOption,
  selected,
  onScrollToBottom,
  isSelectable = false,
  isScrollable = false,
  size = "s",
  isLoading,
  ...rest
}: Props<T>) => {
  const isScrolledToBottomRef = useRef(false);
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollableContainer = scrollableContainerRef.current;
    const onScroll = () => {
      const newIsScrolledToBottom = scrollableContainerRef.current
        ? Math.abs(
            scrollableContainerRef.current.scrollHeight -
              scrollableContainerRef.current.clientHeight -
              scrollableContainerRef.current.scrollTop
          ) < 10
        : true;

      // Only dispatch onScrollToBottom once the threshold is crossed.
      if (!isScrolledToBottomRef.current && newIsScrolledToBottom) {
        onScrollToBottom?.();
      }

      isScrolledToBottomRef.current = newIsScrolledToBottom;
    };

    scrollableContainer?.addEventListener("scroll", onScroll);

    return () => {
      scrollableContainer?.removeEventListener("scroll", onScroll);
    };
  }, []);

  const classes = classNames(
    "vuiOptionsList",
    `vuiOptionsList--${size}`,
    {
      "vuiOptionsList--scrollable": isScrollable
    },
    className
  );

  return (
    <div className={classes} {...rest} ref={scrollableContainerRef}>
      {options.map(({ value, label, onClick, ...rest }) => {
        const isSelected = Array.isArray(selected) ? selected.includes(value) : value === selected;
        return (
          <VuiOptionsListItem
            key={label}
            value={value}
            label={label}
            onClick={() => {
              onClick?.(value);
              onSelectOption?.(value);
            }}
            isSelectable={isSelectable}
            isSelected={isSelected}
            {...rest}
          />
        );
      })}
      {isLoading && (
        <>
          <VuiSpacer size="xxs" />
          <VuiFlexContainer alignItems="center" justifyContent="center" spacing="xs">
            <VuiFlexItem grow={false}>
              <VuiSpinner size="xs" />
            </VuiFlexItem>

            <VuiFlexItem grow={false}>
              <VuiText>
                <p>Loading options…</p>
              </VuiText>
            </VuiFlexItem>
          </VuiFlexContainer>
        </>
      )}
    </div>
  );
};
