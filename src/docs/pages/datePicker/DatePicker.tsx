import { useState } from "react";
import { VuiDatePicker } from "../../../lib";

export const DatePicker = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <VuiDatePicker
      date={date}
      onChange={(date) => setDate(date)}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      anchorSide="left"
    />
  );
};
