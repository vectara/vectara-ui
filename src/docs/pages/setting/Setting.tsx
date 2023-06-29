import { useState } from "react";
import { VuiFormGroup, VuiSelect, VuiSetting, VuiSpacer } from "../../../lib";

const FANCINESS_OPTIONS = [
  {
    text: "Basic",
    value: "basic"
  },
  {
    text: "Intermediate",
    value: "intermediate"
  },
  {
    text: "Advanced",
    value: "advanced"
  },
  {
    text: "Eloise in Paris",
    value: "eloise"
  }
];

export const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [fanciness, setFanciness] = useState("basic");

  return (
    <VuiSetting
      title="Fancy level"
      label="Customize fanciness"
      description="You can specify how fancy you want to get, if that's something that's important to you. We don't judge."
      helpUrl="https://docs.vectara.com"
      isEnabled={isEnabled}
      onToggle={() => setIsEnabled(!isEnabled)}
      badge="New"
    >
      <>
        <VuiFormGroup label="Fanciness" labelFor="fancinessSelect" helpText="How fancy do you wanna get.">
          <VuiSelect
            id="fancinessSelect"
            options={FANCINESS_OPTIONS}
            value={fanciness}
            onChange={(event) => setFanciness(event.target.value)}
          />
        </VuiFormGroup>

        <VuiSpacer size="s" />

        <VuiFormGroup
          label="Fanciness, revisited"
          labelFor="fancinessSelect2"
          helpText="Repeating yourself is kind of fancy."
        >
          <VuiSelect
            id="fancinessSelect2"
            options={FANCINESS_OPTIONS}
            value={fanciness}
            onChange={(event) => setFanciness(event.target.value)}
          />
        </VuiFormGroup>
      </>
    </VuiSetting>
  );
};
