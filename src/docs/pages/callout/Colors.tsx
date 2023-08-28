import { Fragment } from "react";
import {
  BUTTON_COLOR,
  ButtonColor,
  CALLOUT_COLOR,
  VuiButtonSecondary,
  VuiCallout,
  VuiSpacer,
  VuiText
} from "../../../lib";

export const Colors = () => {
  return (
    <>
      {CALLOUT_COLOR.map((color) => (
        <Fragment key={color}>
          <VuiCallout
            key={color}
            color={color}
            title={`Color ${color}`}
            headingElement="h3"
            onDismiss={() => console.log("Dismiss")}
          >
            <VuiText>
              <p>
                Carbon fibers or carbon fibres (alternatively CF, graphite fiber or graphite fibre) are fibers about 5
                to 10 micrometers (0.00020–0.00039 in) in diameter and composed mostly of carbon atoms.
              </p>
              <p>
                Carbon fibers have several advantages: high stiffness, high tensile strength, high strength to weight
                ratio, high chemical resistance, high-temperature tolerance, and low thermal expansion.[2] These
                properties have made carbon fiber very popular in aerospace, civil engineering, military, motorsports,
                and other competition sports.[3] However, they are relatively expensive compared to similar fibers, such
                as glass fiber, basalt fibers, or plastic fibers.
              </p>
            </VuiText>

            {BUTTON_COLOR.includes(color as ButtonColor) && (
              <>
                <VuiSpacer size="m" />
                <VuiButtonSecondary color={color as ButtonColor}>Callout action</VuiButtonSecondary>
              </>
            )}
          </VuiCallout>

          <VuiSpacer size="l" />
        </Fragment>
      ))}
    </>
  );
};
