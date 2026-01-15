import { useState } from "react";
import { VuiAccordion, VuiText, VuiSelect, VuiSpacer } from "../../../lib";

const sizeOptions = [
  { text: "Extra small (xs)", value: "xs" },
  { text: "Small (s)", value: "s" },
  { text: "Medium (m)", value: "m" },
  { text: "Large (l)", value: "l" }
];

export const AccordionHeaderSize = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerSize, setHeaderSize] = useState<"xs" | "s" | "m" | "l">("s");

  return (
    <>
      <VuiSelect
        id="headerSizeSelect"
        options={sizeOptions}
        value={headerSize}
        onChange={(e) => setHeaderSize(e.target.value as "xs" | "s" | "m" | "l")}
      />

      <VuiSpacer size="m" />

      <VuiAccordion header="Variable size header" isOpen={isOpen} setIsOpen={setIsOpen} headerSize={headerSize}>
        <VuiText>
          <p>The header text size changes based on selection.</p>
        </VuiText>
      </VuiAccordion>
    </>
  );
};
