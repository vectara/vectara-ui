import { VuiCopyButton } from "../../../lib";

const options = [
  { value: "this", label: "Copy this" },
  { value: "that", label: "Or copy that" }
];

export const CopyButton = () => {
  return <VuiCopyButton size="s" value="Primary value to copy" options={options} />;
};
