import { BiTrash } from "react-icons/bi";
import { VuiButtonSecondary, VuiIcon } from "../../../lib";

export const Truncate = () => {
  return (
    <div style={{ display: "flex", width: "150px" }}>
      <VuiButtonSecondary
        color="neutral"
        truncate
        icon={
          <VuiIcon>
            <BiTrash />
          </VuiIcon>
        }
      >
        A very long label that will get truncated
      </VuiButtonSecondary>
    </div>
  );
};
