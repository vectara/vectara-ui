import { useState } from "react";
import { VuiDatePicker } from "../../../lib";

export const Inline = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return <VuiDatePicker date={date} onChange={(date) => setDate(date ?? undefined)} isInline />;
};
