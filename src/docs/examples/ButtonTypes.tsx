import {
  BUTTON_COLOR,
  VuiButtonPrimary,
  VuiButtonSecondary,
  VuiButtonTertiary,
  VuiFlexContainer,
  VuiFlexItem
} from "../../lib";

export const ButtonTypes = () => {
  return (
    <>
      <VuiFlexContainer>
        {BUTTON_COLOR.map((color) => (
          <VuiFlexItem grow={false}>
            <VuiButtonPrimary color={color}>Color {color}</VuiButtonPrimary>
          </VuiFlexItem>
        ))}
      </VuiFlexContainer>

      <VuiFlexContainer>
        {BUTTON_COLOR.map((color) => (
          <VuiFlexItem grow={false}>
            <VuiButtonSecondary color={color}>Color {color}</VuiButtonSecondary>
          </VuiFlexItem>
        ))}
      </VuiFlexContainer>

      <VuiFlexContainer>
        {BUTTON_COLOR.map((color) => (
          <VuiFlexItem grow={false}>
            <VuiButtonTertiary color={color}>Color {color}</VuiButtonTertiary>
          </VuiFlexItem>
        ))}
      </VuiFlexContainer>
    </>
  );
};
