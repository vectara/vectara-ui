import { useState } from "react";
import { VuiAccordion, VuiText } from "../../../lib";

export const AccordionFrameless = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VuiAccordion header="Frameless accordion" isOpen={isOpen} setIsOpen={setIsOpen} frameless>
      <VuiText>
        <p>No border around header or body.</p>
      </VuiText>
    </VuiAccordion>
  );
};
