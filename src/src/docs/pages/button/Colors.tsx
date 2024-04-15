import { BiStar } from "react-icons/bi";
import {
  BUTTON_COLOR,
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
import { useState } from "react";

export const Colors = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isInert, setIsInert] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const icon = (
    <VuiIcon>
      <BiStar />
    </VuiIcon>
  );

  return (
    <>
      <VuiToggle label="Loading" checked={isLoading} onChange={() => setIsLoading(!isLoading)} />

      <VuiSpacer size="m" />

      <VuiToggle label="Selected" checked={isSelected} onChange={() => setIsSelected(!isSelected)} />

      <VuiSpacer size="m" />

      <VuiToggle label="Inert (not clickable, non-visual)" checked={isInert} onChange={() => setIsInert(!isInert)} />

      <VuiSpacer size="m" />

      <VuiToggle
        label="Disabled (not clickable, visual)"
        checked={isDisabled}
        onChange={() => setIsDisabled(!isDisabled)}
      />

      <VuiSpacer size="m" />

      <Subsection title="Primary button">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiButtonPrimary
                isSelected={isSelected}
                isDisabled={isDisabled}
                isInert={isInert}
                icon={icon}
                color={color}
                onClick={() => console.log("clicked")}
                isLoading={isLoading}
              >
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
              <VuiButtonSecondary
                isSelected={isSelected}
                isDisabled={isDisabled}
                isInert={isInert}
                icon={icon}
                color={color}
                onClick={() => console.log("clicked")}
                isLoading={isLoading}
              >
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
              <VuiButtonTertiary
                isSelected={isSelected}
                isDisabled={isDisabled}
                isInert={isInert}
                icon={icon}
                color={color}
                onClick={() => console.log("clicked")}
                isLoading={isLoading}
              >
                {color}
              </VuiButtonTertiary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
