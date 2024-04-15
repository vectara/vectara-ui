import { VuiBadge, VuiFlexContainer, VuiFlexItem } from "../../../lib";

export const Wrap = () => (
  <VuiFlexContainer spacing="xxs" className="flexExampleWrap" wrap>
    <VuiFlexItem grow={false}>
      <VuiBadge color="neutral">当たり</VuiBadge>
    </VuiFlexItem>

    <VuiFlexItem grow={false}>
      <VuiBadge color="neutral">先手</VuiBadge>
    </VuiFlexItem>

    <VuiFlexItem grow={false}>
      <VuiBadge color="neutral">気合い</VuiBadge>
    </VuiFlexItem>

    <VuiFlexItem grow={false}>
      <VuiBadge color="neutral">模様</VuiBadge>
    </VuiFlexItem>

    <VuiFlexItem grow={false}>
      <VuiBadge color="neutral">利かし</VuiBadge>
    </VuiFlexItem>
  </VuiFlexContainer>
);
