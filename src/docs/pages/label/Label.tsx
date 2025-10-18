import { VuiLabel } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Label = () => {
  return (
    <>
      <Subsection title="Small size (default)">
        <VuiLabel labelFor="inputId">Label</VuiLabel>
      </Subsection>

      <Subsection title="Extra-small size">
        <VuiLabel labelFor="inputId" size="xs">
          Extra-small label
        </VuiLabel>
      </Subsection>
    </>
  );
};
