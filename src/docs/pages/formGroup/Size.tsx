import { VuiFormGroup, VuiTextInput } from "../../../lib";

export const Size = () => {
  return (
    <VuiFormGroup
      label="Enter input"
      labelFor="input1"
      labelSize="xs"
      helpText="Some helpful information about this input."
    >
      <VuiTextInput id="input1" value="Text input" onChange={(event) => console.log(event.target.value)} />
    </VuiFormGroup>
  );
};
