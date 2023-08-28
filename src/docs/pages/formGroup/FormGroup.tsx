import { VuiFormGroup, VuiSelect, VuiSpacer, VuiTextInput } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const FormGroup = () => (
  <>
    <Subsection title="With help text">
      <VuiFormGroup
        label="Choose an option"
        labelFor="optionsList1"
        helpText="Some helpful information about this input."
      >
        <VuiSelect
          id="optionsList1"
          options={[{ text: "Option A", value: "a" }]}
          value="a"
          onChange={() => undefined}
        />
      </VuiFormGroup>

      <VuiSpacer size="m" />

      <VuiFormGroup label="Enter input" labelFor="optionsList1" helpText="Some helpful information about this input.">
        <VuiTextInput value="Text input" onChange={(event) => console.log(event.target.value)} />
      </VuiFormGroup>
    </Subsection>

    <Subsection title="Without help text">
      <VuiFormGroup label="Choose an option" labelFor="optionsList2">
        <VuiSelect
          id="optionsList2"
          options={[{ text: "Option A", value: "a" }]}
          value="a"
          onChange={() => undefined}
        />
      </VuiFormGroup>
    </Subsection>
  </>
);
