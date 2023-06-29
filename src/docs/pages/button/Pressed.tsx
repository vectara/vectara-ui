import { BUTTON_COLOR, VuiButtonPrimary, VuiButtonSecondary, VuiFlexContainer, VuiFlexItem } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Pressed = () => {
  return (
    <>
      <Subsection title="Primary button">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiButtonPrimary color={color} isPressed>
                Color {color}
              </VuiButtonPrimary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Secondary button">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiButtonSecondary color={color} isPressed>
                Color {color}
              </VuiButtonSecondary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
