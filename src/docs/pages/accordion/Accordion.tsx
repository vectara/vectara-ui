import { useState } from "react";
import { VuiAccordion, VuiText } from "../../../lib";

export const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VuiAccordion header="Open me" isOpen={isOpen} setIsOpen={setIsOpen}>
      <VuiText>
        <p>Peek-a-boo!</p>
      </VuiText>
    </VuiAccordion>
  );
};
