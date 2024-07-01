import { useState } from "react";
import { BiStar } from "react-icons/bi";
import {
  BUTTON_SIZE,
  VuiButtonPrimary,
  VuiButtonSecondary,
  VuiButtonTertiary,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiSpacer,
  VuiToggle
} from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Sizes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const icon = (
    <VuiIcon>
      <BiStar />
    </VuiIcon>
  );

  return (
    <>
      <VuiToggle label="Loading" checked={isLoading} onChange={() => setIsLoading(!isLoading)} />

      <VuiSpacer size="m" />

      <Subsection title="Primary button">
        <VuiFlexContainer>
          {BUTTON_SIZE.map((size) => (
            <VuiFlexItem grow={false} key={size}>
              <VuiButtonPrimary
                icon={icon}
                color="primary"
                size={size}
                isLoading={isLoading}
                onClick={() => console.log("click")}
                onMouseOver={() => console.log("mouse over")}
                onMouseOut={() => console.log("mouse out")}
              >
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
              <VuiButtonSecondary icon={icon} color="primary" size={size} isLoading={isLoading}>
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
              <VuiButtonTertiary icon={icon} color="primary" size={size} isLoading={isLoading}>
                Size {size}
              </VuiButtonTertiary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
