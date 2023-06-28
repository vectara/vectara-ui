import { useState } from "react";
import { VuiButtonPrimary, VuiButtonSecondary, VuiDrawer, VuiSpacer, VuiText, VuiTitle } from "../../../lib";

export const PrimaryDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <VuiButtonPrimary color="primary" onClick={() => setIsOpen(true)}>
        Open primary drawer
      </VuiButtonPrimary>

      <VuiDrawer
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
          <p>I just thought you should know that your drawer is showing.</p>
        </VuiText>

        <VuiSpacer size="l" />

        <VuiButtonSecondary color="primary">A no-op button for testing a11y</VuiButtonSecondary>
      </VuiDrawer>
    </>
  );
};
