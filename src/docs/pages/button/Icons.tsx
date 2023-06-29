import { BiStar } from "react-icons/bi";
import { VuiButtonPrimary, VuiIcon } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Icons = () => {
  const icon = (
    <VuiIcon size="m">
      <BiStar />
    </VuiIcon>
  );

  return (
    <>
      <Subsection title="Icon on right">
        <VuiButtonPrimary icon={icon} color="primary" size="m" iconSide="right">
          Icon on right
        </VuiButtonPrimary>
      </Subsection>

      <Subsection title="Icon only">
        <VuiButtonPrimary icon={icon} color="primary" size="m" />
      </Subsection>
    </>
  );
};
