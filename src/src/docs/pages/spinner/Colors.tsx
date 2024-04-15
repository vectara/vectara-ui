import { SPINNER_COLOR, VuiSpinner } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Colors = () => {
  return (
    <>
      {SPINNER_COLOR.map((color) => (
        <Subsection title={`Color ${color}`} key={color}>
          {color === "empty" ? (
            <div className="spinnerColorLightDemo">
              <VuiSpinner color={color} />
            </div>
          ) : (
            <VuiSpinner color={color} />
          )}
        </Subsection>
      ))}
    </>
  );
};
