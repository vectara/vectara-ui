import { VuiCard, VuiSuspense } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const CardContent = () => {
  return (
    <>
      <Subsection title="Card content">
        <div style={{ maxWidth: "400px", maxHeight: "300px" }}>

        <VuiCard header={<VuiSuspense rows={0.5} />} body={<VuiSuspense rows={3} />} />
        </div>
      </Subsection>

    </>
  );
};
