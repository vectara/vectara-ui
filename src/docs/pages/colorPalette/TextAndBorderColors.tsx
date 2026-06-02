import { VuiFlexContainer } from "../../../lib";
import { Subsection } from "../../components/Subsection";
import { Swatch } from "./Swatch";

// Foreground colors for body copy and form labels.
const textSwatches = [
  { name: "Text", cssVariable: "--vui-color-text", value: "#1c1d22" },
  { name: "Label", cssVariable: "--vui-color-label", value: "#1c1d22" }
];

// Border colors for dividers, inputs, and surfaces.
const borderSwatches = [
  { name: "Border medium", cssVariable: "--vui-color-border-medium", value: "#cbd1de" },
  { name: "Border light", cssVariable: "--vui-color-border-light", value: "#e3e4f3" }
];

export const TextAndBorderColors = () => {
  return (
    <>
      <Subsection title="Text">
        <VuiFlexContainer spacing="l" wrap>
          {textSwatches.map((swatch) => (
            <Swatch key={swatch.cssVariable} {...swatch} />
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Border">
        <VuiFlexContainer spacing="l" wrap>
          {borderSwatches.map((swatch) => (
            <Swatch key={swatch.cssVariable} {...swatch} />
          ))}
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
