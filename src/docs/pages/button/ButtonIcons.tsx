import { BiStar } from "react-icons/bi";
import { BUTTON_COLOR, VuiButtonIcon, VuiFlexContainer, VuiFlexItem, VuiIcon } from "../../../lib";

export const ButtonIcons = () => {
  const icon = (
    <VuiIcon size="m">
      <BiStar />
    </VuiIcon>
  );

  return (
    <VuiFlexContainer>
      {BUTTON_COLOR.map((color) => (
        <VuiFlexItem grow={false} key={color}>
          <VuiButtonIcon icon={icon} color={color} />
        </VuiFlexItem>
      ))}
    </VuiFlexContainer>
  );
};
