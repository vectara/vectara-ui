import { BasicProps as DatePickerProps, VuiDatePicker } from "./DatePicker";
import { Props as PopoverProps, VuiPopover } from "../popover/Popover";
import { VuiTextInput } from "../form";
import { formatDate } from "../../utils";
import { VuiButtonSecondary } from "../button/ButtonSecondary";
import { useState } from "react";

type DateProps = Pick<DatePickerProps, "placeholder" | "data-testid">;

type Props = Pick<PopoverProps, "isOpen" | "setIsOpen" | "anchorSide"> & {
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
  isOpen,
  setIsOpen,
  anchorSide
}: Props) => {
  const [initialStartDate, setInitialStartDate] = useState<Date | null | undefined>(startDate);
  const [initialEndDate, setInitialEndDate] = useState<Date | null | undefined>(endDate);

  const dateRangePicker = (
    <>
      <VuiDatePicker
        isMultiDate
        startDate={startDate}
        endDate={endDate}
        onChange={(dates) => {
          console.log("Selected dates:", dates);
          onChange?.(dates?.[0], dates?.[1]);
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
          onChange?.(initialStartDate, initialEndDate);
          setIsOpen(false);
        }}
        fullWidth={fullWidth}
      >
        Cancel
      </VuiButtonSecondary>
    </>
  );

  const humanizedStartDate = startDate ? formatDate(startDate) : "Unselected start date";
  const humanizedEndDate = endDate ? formatDate(endDate) : "unselected end date";

  const input = (
    <VuiTextInput
      className="vuiDateRangePickerInput"
      value={!startDate && !endDate ? "Select date range" : `${humanizedStartDate} to ${humanizedEndDate}`}
      fullWidth={fullWidth}
    />
  );

  return (
    <VuiPopover
      isOpen={isOpen}
      setIsOpen={(isOpen) => {
        if (!isOpen) {
          setInitialStartDate(startDate);
          setInitialEndDate(endDate);
        }
        setIsOpen(isOpen);
      }}
      button={input}
      anchorSide={anchorSide}
    >
      {dateRangePicker}
    </VuiPopover>
  );
};
