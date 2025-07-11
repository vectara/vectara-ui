import { BasicProps as DatePickerProps, VuiDatePicker } from "./DatePicker";
import { Props as PopoverProps, VuiPopover } from "../popover/Popover";
import { VuiTextInput } from "../form";
import { formatDate } from "../../utils";
import { VuiButtonSecondary } from "../button/ButtonSecondary";
import { useState } from "react";

type DateProps = Pick<DatePickerProps, "placeholder" | "data-testid">;

type Props = Pick<PopoverProps, "isOpen" | "setIsOpen" | "anchorSide" | "header"> & {
  startDate?: Date | null;
  endDate?: Date | null;
  onChange?: (startDate: Date | null | undefined, endDate: Date | null | undefined) => void;
  dateRangeProps?: DateProps;
  fullWidth?: boolean;
  "data-testid"?: string;
};

export const VuiDateRangePicker = ({
  startDate,
  endDate,
  onChange,
  dateRangeProps,
  fullWidth,
  setIsOpen,
  ...rest
}: Props) => {
  // Set hours, minutes, seconds, and milliseconds to zero to capture entire beginning of range.
  const [initialStartDate, setInitialStartDate] = useState<Date | null | undefined>(
    startDate ? new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 0, 0, 0, 0) : null
  );

  // Set hours, minutes, seconds, and milliseconds to end of the day to capture entire end of range.
  const [initialEndDate, setInitialEndDate] = useState<Date | null | undefined>(
    endDate ? new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 23, 59, 59, 999) : null
  );

  const dateRangePicker = (
    <>
      <VuiDatePicker
        isMultiDate
        startDate={initialStartDate}
        endDate={initialEndDate}
        onChange={(dates) => {
          setInitialStartDate(dates?.[0]);
          setInitialEndDate(dates?.[1]);
        }}
        placeholder={dateRangeProps?.placeholder ?? "Select date range"}
        data-testid={dateRangeProps?.["data-testid"]}
        isInline
      />

      <VuiButtonSecondary
        className="vuiDateRangePickerCancelButton"
        size="xs"
        color="neutral"
        onClick={() => {
          setInitialStartDate(startDate);
          setInitialEndDate(endDate);
          setIsOpen(false);
        }}
        fullWidth={fullWidth}
      >
        Cancel
      </VuiButtonSecondary>
    </>
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
          setInitialStartDate(startDate);
          setInitialEndDate(endDate);
        } else {
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
