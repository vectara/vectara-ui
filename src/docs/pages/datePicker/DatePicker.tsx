import { useState } from "react";
import { VuiButtonSecondary, VuiDatePicker, VuiSpacer, VuiText } from "../../../lib";

export const DatePicker = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <VuiText>
        <p>{date?.toUTCString() ?? "Unknown"}</p>
      </VuiText>

      <VuiSpacer size="s" />

      <VuiButtonSecondary
        color="neutral"
        onClick={() => {
          // Add one day to the end date.
          setDate((prevDate) => {
            if (!prevDate) return new Date();
            const newDate = new Date(prevDate);
            newDate.setDate(newDate.getDate() + 1);
            return newDate;
          });
        }}
      >
        Add day to verify external control
      </VuiButtonSecondary>

      <VuiSpacer size="s" />

      <VuiDatePicker
        header="Pick a date, any date"
        date={date}
        onChange={(date) => setDate(date)}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        anchorSide="left"
        canClear
      />
    </>
  );
};
