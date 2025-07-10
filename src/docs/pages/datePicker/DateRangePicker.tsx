import { useState } from "react";
import { VuiDateRangePicker, VuiSpacer, VuiText } from "../../../lib";

export const DateRangePicker = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null | undefined>(
    new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = useState<Date | null | undefined>(new Date());

  return (
    <>
      <VuiText>
        <p>
          From {startDate?.toUTCString() ?? "unknown"} to {endDate?.toUTCString() ?? "unknown"}
        </p>
      </VuiText>

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
      />
    </>
  );
};
