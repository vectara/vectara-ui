import { VuiFormGroup, VuiNumberInput, VuiSelect, VuiSpacer, VuiTextArea, VuiTextInput } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Validation = () => {
  return (
    <>
      <Subsection title="Form groups">
        <VuiFormGroup
          label="Choose an option"
          labelFor="optionsList1"
          helpText="Some helpful information about this input."
          errors={[
            "This is an error message.",
            "Here's a second validation error that you must address before submitting this form."
          ]}
        >
          <VuiSelect
            id="optionsList1"
            options={[{ text: "Option A", value: "a" }]}
            value="a"
            onChange={() => undefined}
          />
        </VuiFormGroup>

        <VuiSpacer size="m" />

        <VuiFormGroup
          label="Enter input"
          labelFor="input1"
          helpText="Some helpful information about this input."
          errors={[
            "This is an error message.",
            "Here's a second validation error that you must address before submitting this form."
          ]}
        >
          <VuiTextInput id="input1" value="Invalid text input" onChange={(event) => console.log(event.target.value)} />
        </VuiFormGroup>

        <VuiSpacer size="m" />

        <VuiFormGroup
          label="Enter text"
          labelFor="textArea"
          helpText="Enter some text here."
          errors={[
            "This is an error message.",
            "Here's a second validation error that you must address before submitting this form."
          ]}
        >
          <VuiTextArea id="textArea" value="Text area" onChange={() => undefined} />
        </VuiFormGroup>
      </Subsection>

      <Subsection title="Standalone inputs">
        <VuiTextInput
          isInvalid={true}
          value="Invalid text input"
          onChange={(event) => console.log(event.target.value)}
        />

        <VuiSpacer size="m" />

        <VuiNumberInput isInvalid={true} value={5} onChange={(value) => console.log(value)} />
      </Subsection>
    </>
  );
};
