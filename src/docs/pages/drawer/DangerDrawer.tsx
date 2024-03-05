import { useState } from "react";
import { VuiButtonPrimary, VuiButtonSecondary, VuiDrawer, VuiSpacer, VuiText } from "../../../lib";
import { BiError } from "react-icons/bi";

export const DangerDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <VuiButtonPrimary color="danger" onClick={() => setIsOpen(true)}>
        Open danger drawer
      </VuiButtonPrimary>

      <VuiDrawer color="danger" isOpen={isOpen} onClose={() => setIsOpen(false)} icon={<BiError />} title="Error">
        <VuiText>
          <p>
            There was an error. In all likelihood you can try showing this error to a colleague, at which point it will
            fail to reproduce.
          </p>
        </VuiText>

        <VuiSpacer size="l" />

        <VuiButtonSecondary color="danger">A no-op button for testing a11y</VuiButtonSecondary>
      </VuiDrawer>
    </>
  );
};
