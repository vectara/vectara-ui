import { BiStar } from "react-icons/bi";
import {
  BUTTON_COLOR,
  VuiIconButton,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  BUTTON_SIZE,
  VuiSpacer
} from "../../../lib";

export const IconButton = () => {
  const icon = (
    <VuiIcon>
      <BiStar />
    </VuiIcon>
  );

  return (
    <>
      <VuiFlexContainer>
        {BUTTON_COLOR.map((color) => (
          <VuiFlexItem grow={false} key={color}>
            <VuiIconButton icon={icon} color={color} />
          </VuiFlexItem>
        ))}
      </VuiFlexContainer>

      <VuiSpacer size="s" />

      <VuiFlexContainer>
        {BUTTON_SIZE.map((size) => (
          <VuiFlexItem grow={false} key={size}>
            <VuiIconButton icon={icon} color="primary" size={size} />
          </VuiFlexItem>
        ))}
      </VuiFlexContainer>
    </>
  );
};
