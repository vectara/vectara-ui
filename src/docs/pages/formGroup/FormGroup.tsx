import { useState } from "react";
import { RadioButtonConfig, VuiFormGroup, VuiSelect, VuiSpacer, VuiSuperRadioGroup, VuiTextInput } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const FormGroup = () => {
  const [group, setGroup] = useState<RadioButtonConfig[]>([
    {
      label: "Pepperoni",
      value: "pepperoni",
      checked: true,
      "data-testid": "pepperoni"
    },
    {
      label: "Mushrooms",
      value: "mushrooms",
      checked: false,
      "data-testid": "mushrooms"
    },
    {
      label: "Jalapeños",
      value: "jalapenos",
      checked: false,
      "data-testid": "jalapenos"
    }
  ]);

  const onChange = (value: string) => {
    setGroup(
      group.map((item) => ({
        ...item,
        checked: item.value === value
      }))
    );
  };

  return (
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

        <VuiFormGroup label="Enter input" labelFor="input1" helpText="Some helpful information about this input.">
          <VuiTextInput id="input1" value="Text input" onChange={(event) => console.log(event.target.value)} />
        </VuiFormGroup>

        <VuiSpacer size="m" />

        <VuiFormGroup label="Select option" labelFor="superRadioGroup">
          <VuiSuperRadioGroup groupName="superRadioGroup" group={group} onChange={onChange} />
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
};
