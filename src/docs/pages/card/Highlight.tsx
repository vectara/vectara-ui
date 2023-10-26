import { VuiCard, VuiText, VuiTitle } from "../../../lib";

export const Highlight = () => {
  return (
    <VuiCard
      footer={
        <VuiText>
          <p>A genetically engineered or artificial being created as an exact replica of a particular human being.</p>
        </VuiText>
      }
      highlight
    >
      <VuiTitle size="m">
        <h4>Replicant</h4>
      </VuiTitle>
    </VuiCard>
  );
};
