import { VuiFlexContainer, VuiFlexItem, VuiSpinner, VuiText } from "../../../lib";

export const Inline = () => (
  <VuiFlexContainer alignItems="center" spacing="xs">
    <VuiFlexItem grow={false}>
      <VuiSpinner size="xs" />
    </VuiFlexItem>

    <VuiFlexItem grow={false}>
      <VuiText>
        <p>Loading</p>
      </VuiText>
    </VuiFlexItem>
  </VuiFlexContainer>
);
