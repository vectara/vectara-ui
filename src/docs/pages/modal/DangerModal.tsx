import { useState } from "react";
import {
  VuiButtonPrimary,
  VuiButtonSecondary,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiModal,
  VuiSpacer,
  VuiText,
  VuiTitle
} from "../../../lib";
import { BiError } from "react-icons/bi";

export const DangerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <VuiButtonPrimary color="danger" onClick={() => setIsOpen(true)}>
        Open danger modal
      </VuiButtonPrimary>

      <VuiModal
        color="danger"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={
          <VuiFlexContainer justifyContent="spaceBetween" alignItems="center" spacing="xs">
            <VuiFlexItem>
              <VuiIcon size="m">
                <BiError />
              </VuiIcon>
            </VuiFlexItem>

            <VuiFlexItem grow={false}>
              <VuiTitle size="s">
                <h2>Error</h2>
              </VuiTitle>
            </VuiFlexItem>
          </VuiFlexContainer>
        }
      >
        <VuiText>
          <p>
            There was an error. In all likelihood you can try showing this error to a colleague, at which point it will
            fail to reproduce.
          </p>
        </VuiText>

        <VuiSpacer size="l" />

        <VuiButtonSecondary color="danger">A no-op button for testing a11y</VuiButtonSecondary>
      </VuiModal>
    </>
  );
};
