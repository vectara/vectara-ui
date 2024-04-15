import { useState } from "react";
import { VuiTextArea } from "../../../lib";

export const TextArea = () => {
  const [value, setValue] = useState<string | undefined>();

  return <VuiTextArea id="textArea" value={value} onChange={(event) => setValue(event.target.value)} fullWidth />;
};
