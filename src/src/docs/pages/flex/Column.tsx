import { VuiFlexContainer, VuiFlexItem } from "../../../lib";

export const Column = () => (
  <VuiFlexContainer spacing="l" direction="column">
    <VuiFlexItem grow={false} className="flexExample" />
    <VuiFlexItem grow={false} className="flexExample" />
    <VuiFlexItem grow={false} className="flexExample" />
    <VuiFlexItem grow={false} className="flexExample" />
  </VuiFlexContainer>
);
