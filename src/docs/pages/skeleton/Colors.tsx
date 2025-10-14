import { SKELETON_COLOR, VuiSkeleton } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Colors = () => {
  return (
    <>
      {SKELETON_COLOR.map((color) => (
        <Subsection title={`Color ${color}`} key={color}>
          <VuiSkeleton color={color} />
        </Subsection>
      ))}
    </>
  );
};