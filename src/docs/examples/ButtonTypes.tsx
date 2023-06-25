import {
  BUTTON_COLOR,
  VuiButtonPrimary,
  VuiButtonSecondary,
  VuiButtonTertiary,
  VuiFlexContainer,
  VuiFlexItem
} from "../../lib";
import { Subsection } from "../components/Subsection";

export const ButtonTypes = () => {
  return (
    <>
      <Subsection title="Primary button">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiButtonPrimary color={color}>Color {color}</VuiButtonPrimary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Secondary button">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiButtonSecondary color={color}>Color {color}</VuiButtonSecondary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Tertiary button">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiButtonTertiary color={color}>Color {color}</VuiButtonTertiary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
