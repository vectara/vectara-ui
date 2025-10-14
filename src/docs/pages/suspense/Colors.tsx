import { SUSPENSE_COLOR, VuiSuspense } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Colors = () => {
  return (
    <>
      {SUSPENSE_COLOR.map((color) => (
        <Subsection title={`Color ${color}`} key={color}>
          <VuiSuspense color={color} />
        </Subsection>
      ))}
    </>
  );
};