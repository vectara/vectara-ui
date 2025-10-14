import { VuiSuspense } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Rows = () => {
  return (
    <>
      <Subsection title="2.75 rows (default)">
        <VuiSuspense rows={2.75} />
      </Subsection>

      <Subsection title="50% width">
        <VuiSuspense rows={0.5} />
      </Subsection>

      <Subsection title="1 full row">
        <VuiSuspense rows={1} />
      </Subsection>


      <Subsection title="3.25 rows (3 full + 25% width)">
        <VuiSuspense rows={3.25} />
      </Subsection>
    </>
  );
};