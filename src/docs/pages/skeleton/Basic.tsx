import { VuiSkeleton } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Basic = () => {
  return (
    <>
      <Subsection title="Basic usage">
        <VuiSkeleton />
      </Subsection>

      <Subsection title="Inactive (no animation)">
        <VuiSkeleton active={false} />
      </Subsection>
    </>
  );
};