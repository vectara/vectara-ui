import { VuiFlexContainer } from "../../../lib";
import { Subsection } from "../../components/Subsection";
import { Swatch } from "./Swatch";

// Neutral shades run from the empty shade (the app background) to the full shade.
// In the dark theme these invert, so reach for the semantic name rather than the literal lightness.
const neutralSwatches = [
  { name: "Empty shade", cssVariable: "--vui-color-empty-shade", value: "#ffffff" },
  { name: "Light shade", cssVariable: "--vui-color-light-shade", value: "#f1f4f6" },
  { name: "Medium shade", cssVariable: "--vui-color-medium-shade", value: "#cbd1de" },
  { name: "Dark shade", cssVariable: "--vui-color-dark-shade", value: "#3f4551" },
  { name: "Darker shade", cssVariable: "--vui-color-darker-shade", value: "#1c1d22" },
  { name: "Full shade", cssVariable: "--vui-color-full-shade", value: "#0b0c0e" }
];

// Special-purpose accents that sit outside the semantic families.
const specialSwatches = [{ name: "Subdued", cssVariable: "--vui-color-subdued-shade", value: "#6d7686" }];

export const NeutralColors = () => {
  return (
    <>
      <Subsection title="Neutrals">
        <VuiFlexContainer spacing="l" wrap>
          {neutralSwatches.map((swatch) => (
            <Swatch key={swatch.cssVariable} {...swatch} />
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Special">
        <VuiFlexContainer spacing="l" wrap>
          {specialSwatches.map((swatch) => (
            <Swatch key={swatch.cssVariable} {...swatch} />
          ))}
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
