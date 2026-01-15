import { useState } from "react";
import { VuiAccordion, VuiText } from "../../../lib";

export const AccordionNoPadding = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VuiAccordion header="No padding accordion" isOpen={isOpen} setIsOpen={setIsOpen} noPadding>
      <VuiText>
        <p>No padding in header or body.</p>
      </VuiText>
    </VuiAccordion>
  );
};
