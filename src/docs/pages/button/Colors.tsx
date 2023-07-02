import { BiStar } from "react-icons/bi";
import {
  BUTTON_COLOR,
  VuiButtonPrimary,
  VuiButtonSecondary,
  VuiButtonTertiary,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon
} from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Colors = () => {
  const icon = (
    <VuiIcon size="m">
      <BiStar />
    </VuiIcon>
  );

  return (
    <>
      <Subsection title="Primary button">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiButtonPrimary icon={icon} color={color}>
                {color}
              </VuiButtonPrimary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Secondary button">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiButtonSecondary icon={icon} color={color}>
                {color}
              </VuiButtonSecondary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Tertiary button">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiButtonTertiary icon={icon} color={color}>
                {color}
              </VuiButtonTertiary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
