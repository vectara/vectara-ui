import { BasicProps as DatePickerProps } from "./DatePicker";
import { Props as PopoverProps, VuiPopover } from "../popover/Popover";
import { VuiTextInput } from "../form";
import { formatDate } from "../../utils";
import { useEffect, useState } from "react";
import { VuiCalendar } from "./Calendar";

type DateProps = Pick<DatePickerProps, "placeholder" | "data-testid">;

type Props = Pick<PopoverProps, "isOpen" | "setIsOpen" | "anchorSide" | "header"> & {
  startDate?: Date;
  endDate?: Date;
  onChange?: (startDate: Date | undefined, endDate: Date | undefined) => void;
  dateRangeProps?: DateProps;
  fullWidth?: boolean;
  canClear?: boolean;
  "data-testid"?: string;
};

export const VuiDateRangePicker = ({
  setIsOpen,
  startDate,
  endDate,
  onChange,
  dateRangeProps,
  fullWidth,
  canClear,
  ...rest
}: Props) => {
  const [initialStartDate, setInitialStartDate] = useState<Date>();
  const [initialEndDate, setInitialEndDate] = useState<Date>();

  // When the startDate or endDate props change, update the internal state.
  useEffect(() => {
    // Set hours, minutes, seconds, and milliseconds to zero to capture entire beginning of range.
    setInitialStartDate(
      startDate ? new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 0, 0, 0, 0) : undefined
    );

    // Set hours, minutes, seconds, and milliseconds to end of the day to capture entire end of range.
    setInitialEndDate(
      endDate ? new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 23, 59, 59, 999) : undefined
    );
  }, [startDate, endDate]);

  const dateRangePicker = (
    <VuiCalendar
      isRange
      startDate={initialStartDate}
      endDate={initialEndDate}
      onChange={(startDate, endDate) => {
        setInitialStartDate(startDate);
        setInitialEndDate(endDate);
      }}
      placeholder={dateRangeProps?.placeholder}
      data-testid={dateRangeProps?.["data-testid"]}
      onCancel={() => {
        setInitialStartDate(startDate);
        setInitialEndDate(endDate);
        setIsOpen(false);
      }}
      onReset={
        canClear
          ? () => {
              setInitialStartDate(undefined);
              setInitialEndDate(undefined);
            }
          : undefined
      }
    />
  );

  const humanizedStartDate = initialStartDate ? formatDate(initialStartDate) : "Unselected start date";
  const humanizedEndDate = initialEndDate ? formatDate(initialEndDate) : "unselected end date";

  const { "data-testid": testId, ...restProps } = rest;

  const input = (
    <VuiTextInput
      className="vuiDateRangePickerInput"
      value={
        !initialStartDate && !initialEndDate ? "Select date range" : `${humanizedStartDate} to ${humanizedEndDate}`
      }
      fullWidth={fullWidth}
      data-testid={testId}
    />
  );

  return (
    <VuiPopover
      setIsOpen={(isOpen) => {
        if (isOpen) {
          // Set temporary internal state to the provided values when opening the popover.
          setInitialStartDate(startDate);
          setInitialEndDate(endDate);
        } else {
          // Commit internal state to the parent component when closing the popover.
          onChange?.(initialStartDate, initialEndDate);
        }
        setIsOpen(isOpen);
      }}
      button={input}
      {...restProps}
    >
      {dateRangePicker}
    </VuiPopover>
  );
};
