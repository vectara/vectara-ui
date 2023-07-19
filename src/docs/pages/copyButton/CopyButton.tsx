import { VuiCopyButton, VuiSpacer } from "../../../lib";

const options = [
  { value: "this", label: "Copy this" },
  { value: "that", label: "Or copy that" }
];

export const CopyButton = () => {
  return (
    <>
      <VuiCopyButton size="xs" value="Primary value to copy" options={options} />

      <VuiSpacer size="m" />

      <VuiCopyButton size="s" value="Primary value to copy" options={options} />

      <VuiSpacer size="m" />

      <VuiCopyButton size="m" value="Primary value to copy" options={options} />

      <VuiSpacer size="m" />

      <VuiCopyButton size="xs" value="Copy without options" label="Copy Json" />
    </>
  );
};
