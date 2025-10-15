import { VuiSkeleton } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Rows = () => {
  return (
    <>
      <Subsection title="2.75 rows (default)">
        <VuiSkeleton rows={2.75} />
      </Subsection>

      <Subsection title="50% width">
        <VuiSkeleton rows={0.5} />
      </Subsection>

      <Subsection title="1 full row">
        <VuiSkeleton rows={1} />
      </Subsection>


      <Subsection title="3.25 rows (3 full + 25% width)">
        <VuiSkeleton rows={3.25} />
      </Subsection>
    </>
  );
};