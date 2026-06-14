import { VuiFlexContainer } from "../../../lib";
import { Subsection } from "../../components/Subsection";
import { Swatch } from "./Swatch";

// Each semantic family has three shades: a base "shade", a 50%-opacity "light shade",
// and a tinted "lighter shade" suitable for backgrounds.
const families = [
  {
    name: "Accent",
    swatches: [
      { name: "Shade", cssVariable: "--vui-color-accent-shade", value: "#5f30c3" },
      { name: "Light shade", cssVariable: "--vui-color-accent-border", value: "50% opacity" },
      { name: "Lighter shade", cssVariable: "--vui-color-accent-background", value: "#eee7ff" }
    ]
  },
  {
    name: "Primary",
    swatches: [
      { name: "Shade", cssVariable: "--vui-color-primary-shade", value: "#045dda" },
      { name: "Light shade", cssVariable: "--vui-color-primary-border", value: "50% opacity" },
      { name: "Lighter shade", cssVariable: "--vui-color-primary-background", value: "#f1f7ff" }
    ]
  },
  {
    name: "Success",
    swatches: [
      { name: "Shade", cssVariable: "--vui-color-success-shade", value: "#249719" },
      { name: "Light shade", cssVariable: "--vui-color-success-border", value: "50% opacity" },
      { name: "Lighter shade", cssVariable: "--vui-color-success-background", value: "#e2f2e0" }
    ]
  },
  {
    name: "Warning",
    swatches: [
      { name: "Shade", cssVariable: "--vui-color-warning-shade", value: "#a86f1b" },
      { name: "Light shade", cssVariable: "--vui-color-warning-border", value: "50% opacity" },
      { name: "Lighter shade", cssVariable: "--vui-color-warning-background", value: "#ffeed4" }
    ]
  },
  {
    name: "Danger",
    swatches: [
      { name: "Shade", cssVariable: "--vui-color-danger-shade", value: "#d22d2d" },
      { name: "Light shade", cssVariable: "--vui-color-danger-border", value: "50% opacity" },
      { name: "Lighter shade", cssVariable: "--vui-color-danger-background", value: "#fff1f1" }
    ]
  }
];

export const SemanticColors = () => {
  return (
    <>
      {families.map((family) => (
        <Subsection key={family.name} title={family.name}>
          <VuiFlexContainer spacing="l" wrap>
            {family.swatches.map((swatch) => (
              <Swatch key={swatch.cssVariable} {...swatch} />
            ))}
          </VuiFlexContainer>
        </Subsection>
      ))}
    </>
  );
};
