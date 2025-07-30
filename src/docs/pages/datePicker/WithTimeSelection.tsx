import { useState } from "react";
import { VuiDatePicker, VuiSpacer, VuiText } from "../../../lib";

export const WithTimeSelection = () => {
  const [isTimeOpen, setIsTimeOpen] = useState<boolean>(false);
  const [dateWithTime, setDateWithTime] = useState<Date | undefined>(new Date());

  return (
    <>
      <VuiText>
        <h3>Date Picker with Time Selection</h3>
        <p>{dateWithTime?.toString() ?? "Unknown"}</p>
      </VuiText>

      <VuiSpacer size="s" />

      <VuiDatePicker
        header="Pick a date and time"
        date={dateWithTime}
        onChange={(date) => setDateWithTime(date)}
        isOpen={isTimeOpen}
        setIsOpen={setIsTimeOpen}
        anchorSide="left"
        showTimeSelect
        timeIntervals={30}
        canClear
      />
    </>
  );
};
