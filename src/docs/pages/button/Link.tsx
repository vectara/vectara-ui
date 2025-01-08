import { useState } from "react";
import { VuiButtonPrimary, VuiSpacer, VuiToggle } from "../../../lib";

export const Link = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  return (
    <>
      <VuiToggle
        label="Disabled (not clickable, visual)"
        checked={isDisabled}
        onChange={() => setIsDisabled(!isDisabled)}
      />

      <VuiSpacer size="m" />

      <VuiButtonPrimary
        color="accent"
        href="https://vectara.com"
        target="_blank"
        onClick={() => console.log("click")}
        onMouseOver={() => console.log("mouse over")}
        onMouseOut={() => console.log("mouse out")}
        isDisabled={isDisabled}
      >
        Visit Vectara.com
      </VuiButtonPrimary>
    </>
  );
};
