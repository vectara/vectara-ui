import { BiHelpCircle } from "react-icons/bi";
import { PATCH_COLOR, VuiIcon, VuiPatch, VuiFlexContainer } from "../../../lib";

export const Icons = () => {
  return (
    <VuiFlexContainer spacing="m" wrap>
      {PATCH_COLOR.map((color) => (
        <VuiPatch color={color}>
          <VuiIcon size="m">
            <BiHelpCircle />
          </VuiIcon>
        </VuiPatch>
      ))}
    </VuiFlexContainer>
  );
};
