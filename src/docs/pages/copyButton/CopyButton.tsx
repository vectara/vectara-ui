import { VuiCopyButton, VuiSpacer } from "../../../lib";

const options = [
  { value: "this", label: "Copy this" },
  { value: "that", label: "Or copy that" }
];

export const CopyButton = () => {
  return (
    <>
      <VuiCopyButton title="Copy value" size="xs" value="Primary value to copy" options={options} />

      <VuiSpacer size="m" />

      <VuiCopyButton title="Copy value" size="s" value="Primary value to copy" options={options} />

      <VuiSpacer size="m" />

      <VuiCopyButton title="Copy value" size="m" value="Primary value to copy" options={options} />

      <VuiSpacer size="m" />

      <VuiCopyButton size="xs" value="Copy without options" label="Copy JSON" />

      <VuiSpacer size="m" />

      <VuiCopyButton size="xs" value="Copy with label and options" label="Copy JSON" options={options} />
    </>
  );
};
