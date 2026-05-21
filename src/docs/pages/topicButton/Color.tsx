import { VuiFlexContainer, VuiFlexItem, VuiText, VuiTopicButton } from "../../../lib";

export const Color = () => {
  return (
    <VuiFlexContainer direction="column" spacing="m">
      {(["primary", "accent"] as const).map((color) => (
        <VuiFlexItem key={color} grow={1}>
          <VuiTopicButton color={color} title={`${color} topic button`} fullWidth>
            <VuiText>
              <p>Colors the title and hover shadow to match the {color} color.</p>
            </VuiText>
          </VuiTopicButton>
        </VuiFlexItem>
      ))}
    </VuiFlexContainer>
  );
};
