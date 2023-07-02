import { BiStar } from "react-icons/bi";
import {
  BUTTON_SIZE,
  VuiButtonPrimary,
  VuiButtonSecondary,
  VuiButtonTertiary,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon
} from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Sizes = () => {
  const icon = (
    <VuiIcon size="m">
      <BiStar />
    </VuiIcon>
  );

  return (
    <>
      <Subsection title="Primary button">
        <VuiFlexContainer>
          {BUTTON_SIZE.map((size) => (
            <VuiFlexItem grow={false} key={size}>
              <VuiButtonPrimary icon={icon} color="primary" size={size}>
                Size {size}
              </VuiButtonPrimary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Secondary button">
        <VuiFlexContainer>
          {BUTTON_SIZE.map((size) => (
            <VuiFlexItem grow={false} key={size}>
              <VuiButtonSecondary icon={icon} color="primary" size={size}>
                Size {size}
              </VuiButtonSecondary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Tertiary button">
        <VuiFlexContainer>
          {BUTTON_SIZE.map((size) => (
            <VuiFlexItem grow={false} key={size}>
              <VuiButtonTertiary icon={icon} color="primary" size={size}>
                Size {size}
              </VuiButtonTertiary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
