import { useState } from "react";
import { VuiAccordion, VuiSpacer, VuiText } from "../../../lib";

export const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VuiAccordion header="Open me" isOpen={isOpen} setIsOpen={setIsOpen}>
      <VuiSpacer size="s" />
      <VuiText>
        <p>Peek-a-boo!</p>
      </VuiText>
    </VuiAccordion>
  );
};
