import { useState } from "react";
import { VuiButtonSecondary, VuiDateRangePicker, VuiSpacer, VuiText, VuiTextInput } from "../../../lib";
import { formatDate } from "../../../lib/utils";

export const DateRangePickerCustomInput = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | undefined>(
    new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const humanizedStartDate = startDate ? formatDate(startDate) : "Unselected start date";
  const humanizedEndDate = endDate ? formatDate(endDate) : "unselected end date";

  return (
    <>
      <VuiText>
        <p>
          From {startDate?.toUTCString() ?? "unknown"} to {endDate?.toUTCString() ?? "unknown"}
        </p>
      </VuiText>

      <VuiSpacer size="s" />

      <VuiButtonSecondary
        color="neutral"
        onClick={() => {
          // Add one day to the end date.
          setEndDate((prevEndDate) => {
            if (!prevEndDate) return new Date();
            const newEndDate = new Date(prevEndDate);
            newEndDate.setDate(newEndDate.getDate() + 1);
            return newEndDate;
          });
        }}
      >
        Add day to verify external control
      </VuiButtonSecondary>

      <VuiSpacer size="s" />

      <VuiDateRangePicker
        header="Date filter"
        startDate={startDate}
        endDate={endDate}
        onChange={(startDate, endDate) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        anchorSide="left"
        data-testid="dateRangePickerButton"
        dateRangeProps={{ "data-testid": "dateRangePicker" }}
        canClear
        input={
          <VuiTextInput
            size="s"
            className="vuiDateRangePickerInput"
            value={!startDate && !endDate ? "Select date range" : `${humanizedStartDate} to ${humanizedEndDate}`}
          />
        }
      />
    </>
  );
};
