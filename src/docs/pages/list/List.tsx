import { BiCheck } from "react-icons/bi";
import { VuiFlexContainer, VuiList, VuiFlexItem, VuiSpinner, VuiIcon, VuiText, VuiTextColor } from "../../../lib";

export const List = () => {
  const items = [
    {
      isComplete: true,
      render: () => (
        <VuiFlexContainer alignItems="center" spacing="s">
          <VuiFlexItem>
            <VuiIcon color="success" size="s">
              <BiCheck />
            </VuiIcon>
          </VuiFlexItem>

          <VuiFlexItem grow={false}>
            <VuiText>
              <p>Selected strategy</p>
            </VuiText>
          </VuiFlexItem>
        </VuiFlexContainer>
      )
    },
    {
      isComplete: true,
      render: () => (
        <VuiFlexContainer alignItems="center" spacing="m">
          <VuiFlexItem>
            <VuiSpinner size="xs" />
          </VuiFlexItem>

          <VuiFlexItem grow={false}>
            <VuiText>
              <p>Retrieving information</p>
            </VuiText>
          </VuiFlexItem>
        </VuiFlexContainer>
      )
    },
    {
      isComplete: false,
      render: () => (
        <VuiText>
          <p>
            <VuiTextColor color="subdued">Generate summary</VuiTextColor>
          </p>
        </VuiText>
      )
    }
  ];

  return <VuiList items={items} />;
};
