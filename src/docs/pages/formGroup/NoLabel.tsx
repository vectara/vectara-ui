import { useState } from "react";
import { VuiFormGroup, VuiSpacer, VuiTextInput, VuiToggle } from "../../../lib";

export const NoLabel = () => {
  const [showError, setShowError] = useState(false);

  return (
    <>
      <VuiToggle label="Show error message" onChange={(e) => setShowError(e.target.checked)} />

      <VuiSpacer size="m" />

      <VuiFormGroup errors={showError ? ["This is an error message."] : []}>
        <VuiTextInput value="Text input" onChange={() => undefined} />
      </VuiFormGroup>
    </>
  );
};
