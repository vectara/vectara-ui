import { VuiButtonPrimary, VuiCallout, VuiSpacer, VuiText } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Variations = () => {
  return (
    <>
      <Subsection title="With content">
        <VuiCallout color="primary" size="m" title="Carbon fiber" headingElement="h3">
          <VuiText>
            <p>
              Carbon fibers or carbon fibres (alternatively CF, graphite fiber or graphite fibre) are fibers about 5 to
              10 micrometers (0.00020–0.00039 in) in diameter and composed mostly of carbon atoms.
            </p>

            <p>
              Carbon fibers have several advantages: high stiffness, high tensile strength, high strength to weight
              ratio, high chemical resistance, high-temperature tolerance, and low thermal expansion.[2] These
              properties have made carbon fiber very popular in aerospace, civil engineering, military, motorsports, and
              other competition sports.[3] However, they are relatively expensive compared to similar fibers, such as
              glass fiber, basalt fibers, or plastic fibers.
            </p>
          </VuiText>

          <VuiSpacer size="m" />
          <VuiButtonPrimary color="primary">Callout action</VuiButtonPrimary>
        </VuiCallout>
      </Subsection>

      <Subsection title="Title only">
        <VuiCallout
          color="primary"
          size="m"
          title="Carbon fibers are relatively expensive compared to similar fibers, such as
          glass fiber, basalt fibers, or plastic fibers"
          headingElement="h3"
          onDismiss={() => console.log("Dismiss")}
        />
      </Subsection>
    </>
  );
};
