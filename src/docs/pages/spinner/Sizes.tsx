import { SPINNER_SIZE, VuiSpinner } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Sizes = () => {
  return (
    <>
      {SPINNER_SIZE.map((size) => (
        <Subsection title={`Size ${size}`} key={size}>
          <VuiSpinner size={size} />
        </Subsection>
      ))}
    </>
  );
};
