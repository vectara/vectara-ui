import { useState } from "react";
import { VuiDatePicker } from "../../../lib";

export const Inline = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  return <VuiDatePicker date={date} onChange={(date) => setDate(date)} isInline />;
};
