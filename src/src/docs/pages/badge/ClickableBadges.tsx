import { VuiBadge, VuiFlexContainer, VuiFlexItem } from "../../../lib";

export const ClickableBadges = () => {
  return (
    <VuiFlexContainer>
      <VuiFlexItem grow={false}>
        <VuiBadge color="primary" href="https://docs.vectara.com/" target="_blank">
          Docs
        </VuiBadge>
      </VuiFlexItem>

      <VuiFlexItem grow={false}>
        <VuiBadge color="primary" onClick={() => alert("Hello, world")}>
          Hello, world
        </VuiBadge>
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
