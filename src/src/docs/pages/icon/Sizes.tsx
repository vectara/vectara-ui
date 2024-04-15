import { BiStar } from "react-icons/bi";
import { ICON_SIZE, VuiFlexContainer, VuiFlexItem, VuiIcon, VuiText } from "../../../lib";

export const Sizes = () => {
  return (
    <VuiFlexContainer>
      {ICON_SIZE.map((size) => (
        <VuiFlexItem grow={false} key={size}>
          <VuiText>
            <p>Size {size}</p>
          </VuiText>

          <VuiIcon size={size}>
            <BiStar />
          </VuiIcon>
        </VuiFlexItem>
      ))}
    </VuiFlexContainer>
  );
};
