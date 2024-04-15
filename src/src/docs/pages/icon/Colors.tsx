import { BiStar } from "react-icons/bi";
import { ICON_COLOR, VuiFlexContainer, VuiFlexItem, VuiIcon, VuiText } from "../../../lib";

export const Colors = () => {
  return (
    <VuiFlexContainer>
      {ICON_COLOR.map((color) => (
        <VuiFlexItem grow={false} key={color}>
          <VuiText>
            <p>Color {color}</p>
          </VuiText>

          <VuiIcon color={color} size="m">
            <BiStar />
          </VuiIcon>
        </VuiFlexItem>
      ))}
    </VuiFlexContainer>
  );
};
