import { useState } from "react";
import { VuiAccordion, VuiText } from "../../../lib";

export const AccordionFramelessNoPadding = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VuiAccordion header="Frameless, no padding" isOpen={isOpen} setIsOpen={setIsOpen} frameless noPadding>
      <VuiText>
        <p>No border and no padding.</p>
      </VuiText>
    </VuiAccordion>
  );
};
