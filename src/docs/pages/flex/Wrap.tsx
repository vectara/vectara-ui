import { VuiBadge, VuiFlexContainer, VuiFlexItem } from "../../../lib";

export const Wrap = () => (
  <VuiFlexContainer spacing="xxs" className="flexExampleWrap" wrap>
    <VuiFlexItem grow={false}>
      <VuiBadge color="normal">当たり</VuiBadge>
    </VuiFlexItem>

    <VuiFlexItem grow={false}>
      <VuiBadge color="normal">先手</VuiBadge>
    </VuiFlexItem>

    <VuiFlexItem grow={false}>
      <VuiBadge color="normal">気合い</VuiBadge>
    </VuiFlexItem>

    <VuiFlexItem grow={false}>
      <VuiBadge color="normal">模様</VuiBadge>
    </VuiFlexItem>

    <VuiFlexItem grow={false}>
      <VuiBadge color="normal">利かし</VuiBadge>
    </VuiFlexItem>
  </VuiFlexContainer>
);
