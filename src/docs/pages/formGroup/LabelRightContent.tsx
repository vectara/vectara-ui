import { useState } from "react";
import { VuiFormGroup, VuiSelect, VuiTextInput } from "../../../lib";

type limitMode = "static" | "dynamic" | "agent" | "disabled";

const limitModeOptions = [
  { text: "Statically defined", value: "static" as const },
  { text: "Dynamically defined", value: "dynamic" as const },
  { text: "Agent defined", value: "agent" as const },
  { text: "Disabled", value: "disabled" as const }
];

export const LabelRightContent = () => {
  const [limitMode, setlimitMode] = useState<limitMode>("static");

  return (
    <div>
      <VuiFormGroup
        label="Limit"
        labelFor="limitInput"
        helpText="Maximum number of results to return Default: 10"
        labelRightContent={
          <VuiSelect
            size="s"
            options={limitModeOptions}
            value={limitMode}
            onChange={(event) => setlimitMode(event.target.value as limitMode)}
          />
        }
      >
        <VuiTextInput id="limitInput" value="5" onChange={() => undefined} />
      </VuiFormGroup>
    </div>
  );
};
