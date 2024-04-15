import { BiStar } from "react-icons/bi";
import { VuiButtonTertiary, VuiFlexContainer, VuiFlexItem, VuiIcon, VuiTab, VuiTabs } from "../../../lib";

export const Links = () => {
  return (
    <VuiTabs
      append={
        <VuiButtonTertiary color="primary" size="s">
          Info
        </VuiButtonTertiary>
      }
    >
      <VuiTab isActive={true} href="#">
        <VuiFlexContainer alignItems="center" spacing="xs">
          <VuiFlexItem grow={false}>
            <VuiIcon color="subdued" size="s">
              <BiStar />
            </VuiIcon>
          </VuiFlexItem>

          <VuiFlexItem grow={false}>First tab</VuiFlexItem>
        </VuiFlexContainer>
      </VuiTab>

      <VuiTab href="#">Second tab</VuiTab>

      <VuiTab href="#">Third tab</VuiTab>
    </VuiTabs>
  );
};
