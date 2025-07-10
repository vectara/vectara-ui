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
  const [initialStartDate, setInitialStartDate] = useState<Date | null | undefined>(startDate);
  const [initialEndDate, setInitialEndDate] = useState<Date | null | undefined>(endDate);

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

  const input = (
    <VuiTextInput
      className="vuiDateRangePickerInput"
      value={
        !initialStartDate && !initialEndDate ? "Select date range" : `${humanizedStartDate} to ${humanizedEndDate}`
      }
      fullWidth={fullWidth}
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
      {...rest}
    >
      {dateRangePicker}
    </VuiPopover>
  );
};
