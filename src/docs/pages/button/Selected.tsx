import { useState } from "react";
import {
  BUTTON_COLOR,
  VuiButtonPrimary,
  VuiButtonSecondary,
  VuiButtonTertiary,
  VuiFlexContainer,
  VuiFlexItem,
  VuiSpacer,
  VuiToggle
} from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Selected = () => {
  const [isInert, setIsInert] = useState<boolean>(false);

  return (
    <>
      <VuiToggle label="Inert (not clickable)" checked={isInert} onChange={() => setIsInert(!isInert)} />

      <VuiSpacer size="m" />

      <Subsection title="Primary button">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiButtonPrimary isInert={isInert} color={color} isSelected onClick={() => console.log("clicked")}>
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
              <VuiButtonSecondary isInert={isInert} color={color} isSelected onClick={() => console.log("clicked")}>
                Color {color}
              </VuiButtonSecondary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Tertiary button">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiButtonTertiary isInert={isInert} color={color} isSelected onClick={() => console.log("clicked")}>
                Color {color}
              </VuiButtonTertiary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
