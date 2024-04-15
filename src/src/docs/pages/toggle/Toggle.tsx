import { useState } from "react";
import { VuiToggle } from "../../../lib";

export const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  return <VuiToggle checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} label="Caffeinate workers" />;
};
