import { useState } from "react";
import { BUTTON_COLOR, ButtonColor, VuiOptionsButton, VuiSpacer, VuiFlexContainer, VuiFlexItem } from "../../../lib";

const options = [
  { value: "a", label: "Alternative A" },
  { value: "b", label: "Plan B" },
  { value: "c", label: "Course of action C" }
];

export const Secondary = () => {
  const [isOpen, setIsOpen] = useState<Record<ButtonColor, boolean>>(
    BUTTON_COLOR.reduce((acc, color) => ({ ...acc, [color]: false }), {} as Record<ButtonColor, boolean>)
  );

  return (
    <VuiFlexContainer>
      {BUTTON_COLOR.map((color) => (
        <VuiFlexItem grow={false} key={color}>
          <VuiOptionsButton
            type="secondary"
            isOpen={isOpen[color]}
            setIsOpen={(isButtonOpen) =>
              setIsOpen({
                ...isOpen,
                [color]: isButtonOpen
              })
            }
            color={color}
            onSelectOption={(value) => {
              alert(`Selected ${value}`);
            }}
            options={options}
          >
            Perform action
          </VuiOptionsButton>
          <VuiSpacer size="m" />
        </VuiFlexItem>
      ))}
    </VuiFlexContainer>
  );
};
