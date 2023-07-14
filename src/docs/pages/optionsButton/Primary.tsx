import { useState } from "react";
import { BUTTON_COLOR, VuiOptionsButton, VuiSpacer, VuiFlexContainer, VuiFlexItem, BUTTON_SIZE } from "../../../lib";

const options = [
  { value: "a", label: "Alternative A" },
  { value: "b", label: "Plan B" },
  { value: "c", label: "Course of action C" }
];

const sizeColorKeys = BUTTON_SIZE.reduce((accum, size) => {
  BUTTON_COLOR.forEach((color) => {
    accum.push(`${size}-${color}`);
  });

  return accum;
}, [] as string[]);

export const Primary = () => {
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>(
    sizeColorKeys.reduce((acc, sizeColorKey) => ({ ...acc, [sizeColorKey]: false }), {})
  );

  return (
    <>
      {BUTTON_SIZE.map((size) => (
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiOptionsButton
                size={size}
                isOpen={isOpen[`${size}-${color}`]}
                setIsOpen={(isButtonOpen) =>
                  setIsOpen({
                    ...isOpen,
                    [`${size}-${color}`]: isButtonOpen
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
      ))}
    </>
  );
};
