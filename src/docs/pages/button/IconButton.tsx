import { BiStar } from "react-icons/bi";
import { BUTTON_COLOR, VuiIconButton, VuiFlexContainer, VuiFlexItem, VuiIcon } from "../../../lib";

export const IconButton = () => {
  const icon = (
    <VuiIcon>
      <BiStar />
    </VuiIcon>
  );

  return (
    <VuiFlexContainer>
      {BUTTON_COLOR.map((color) => (
        <VuiFlexItem grow={false} key={color}>
          <VuiIconButton icon={icon} color={color} />
        </VuiFlexItem>
      ))}
    </VuiFlexContainer>
  );
};
