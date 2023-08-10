import { useState } from "react";
import {
  VuiButtonPrimary,
  VuiButtonSecondary,
  VuiModal,
  VuiSearchSelect,
  VuiSpacer,
  VuiText,
  VuiTitle
} from "../../../lib";

const options = [
  { value: "a", label: "Caffeine-free" },
  { value: "b", label: "Freeze dried" },
  { value: "c", label: "Gluten-free" },
  { value: "d", label: "Halal" },
  { value: "e", label: "High fiber" },
  { value: "f", label: "Kosher" },
  { value: "g", label: "Lactose-free" },
  { value: "h", label: "Low-carb" },
  { value: "i", label: "No nuts" },
  { value: "j", label: "Non-GMO" },
  { value: "k", label: "Sugar-free" },
  { value: "l", label: "Vegan" }
];

export const PrimaryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <>
      <VuiButtonPrimary color="primary" onClick={() => setIsOpen(true)}>
        Open primary modal
      </VuiButtonPrimary>

      <VuiModal
        color="primary"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={
          <VuiTitle size="s">
            <h2>FYI</h2>
          </VuiTitle>
        }
      >
        <VuiText>
          <p>I just thought you should know that your modal is showing.</p>
        </VuiText>

        <VuiSpacer size="m" />

        <VuiSearchSelect
          title="Select all that apply"
          isOpen={isPopoverOpen}
          setIsOpen={setIsPopoverOpen}
          onSelect={() => undefined}
          selected={[]}
          options={options}
        >
          <VuiButtonSecondary color="neutral" size="s">
            Meal preference
          </VuiButtonSecondary>
        </VuiSearchSelect>

        <VuiSpacer size="l" />

        <VuiButtonSecondary color="primary">A no-op button for testing a11y</VuiButtonSecondary>
      </VuiModal>
    </>
  );
};
