import { VuiFlexContainer, VuiFlexItem } from "../../../lib";
import { FLEX_SPACING } from "../../../lib/components/flex/types";
import { Subsection } from "../../components/Subsection";

export const Spacing = () => (
  <>
    {FLEX_SPACING.map((spacing) => (
      <Subsection key={spacing} title={`Spacing ${spacing}`}>
        <VuiFlexContainer spacing={spacing}>
          <VuiFlexItem grow={1} className="flexExample" />
          <VuiFlexItem grow={1} className="flexExample" />
          <VuiFlexItem grow={1} className="flexExample" />
          <VuiFlexItem grow={1} className="flexExample" />
        </VuiFlexContainer>
      </Subsection>
    ))}
  </>
);
