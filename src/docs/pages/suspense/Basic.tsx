import { VuiSuspense } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Basic = () => {
  return (
    <>
      <Subsection title="Basic usage">
        <VuiSuspense />
      </Subsection>

      <Subsection title="Inactive (no animation)">
        <VuiSuspense active={false} />
      </Subsection>
    </>
  );
};