import { Props as PopoverProps, VuiPopover } from "../popover/Popover";
import { VuiTextInput } from "../form";
import { formatDate } from "../../utils";
import { VuiCalendar } from "./Calendar";
import { useState } from "react";

export type BasicProps = {
  placeholder?: string;
  canClear?: boolean;
  "data-testid"?: string;
};

type DatePickerProps = BasicProps & {
  date: Date | undefined;
  onChange?: (date: Date | undefined) => void;
};

type InlineProps = DatePickerProps & {
  isInline: true;
};

type InPopoverProps = DatePickerProps &
  Pick<PopoverProps, "isOpen" | "setIsOpen" | "anchorSide" | "header"> & {
    isInline?: false;
    fullWidth?: boolean;
  };

type Props = InlineProps | InPopoverProps;

export const VuiDatePicker = ({ placeholder = "Select date", canClear, isInline = false, ...rest }: Props) => {
  const { date, onChange } = rest;

  const [initialDate, setInitialDate] = useState<Date | undefined>(date);

  if (isInline) {
    return (
      <VuiCalendar
        isInline={isInline}
        startDate={date}
        onChange={onChange}
        onReset={
          canClear
            ? () => {
                onChange?.(undefined);
              }
            : undefined
        }
        placeholder={placeholder}
        data-testid={rest["data-testid"]}
      />
    );
  }

  const { fullWidth, setIsOpen, ...restProps } = rest as InPopoverProps;

  const input = <VuiTextInput value={date ? formatDate(date) : ""} fullWidth={fullWidth} />;

  return (
    <VuiPopover
      setIsOpen={(isOpen) => {
        if (isOpen) {
          // Set temporary internal state to the provided values when opening the popover.
          setInitialDate(date);
        } else {
          // Commit internal state to the parent component when closing the popover.
          onChange?.(initialDate);
        }
        setIsOpen(isOpen);
      }}
      button={input}
      {...restProps}
    >
      <VuiCalendar
        isInline={isInline}
        startDate={initialDate}
        onChange={(date) => {
          setInitialDate(date);
        }}
        onCancel={() => {
          setInitialDate(date);
          setIsOpen(false);
        }}
        onReset={
          canClear
            ? () => {
                setInitialDate(undefined);
              }
            : undefined
        }
        placeholder={placeholder}
        data-testid={rest["data-testid"]}
      />
    </VuiPopover>
  );
};
