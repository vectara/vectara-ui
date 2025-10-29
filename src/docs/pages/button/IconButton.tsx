import { BiLinkExternal, BiStar } from "react-icons/bi";
import {
  BUTTON_COLOR,
  VuiIconButton,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  BUTTON_SIZE,
  VuiSpacer,
  VuiToggle,
  VuiText
} from "../../../lib";
import { Subsection } from "../../components/Subsection";
import { useState } from "react";

export const IconButton = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const icon = (
    <VuiIcon>
      <BiStar />
    </VuiIcon>
  );

  return (
    <>
      <VuiToggle
        label="Disabled (not clickable, visual)"
        checked={isDisabled}
        onChange={() => setIsDisabled(!isDisabled)}
      />

      <VuiSpacer size="m" />

      <VuiFlexContainer>
        {BUTTON_COLOR.map((color) => (
          <VuiFlexItem grow={false} key={color}>
            <VuiIconButton
              aria-label="Example button"
              icon={icon}
              color={color}
              isDisabled={isDisabled}
              onClick={() => console.log("click")}
              onMouseOver={() => console.log("mouse over")}
              onMouseOut={() => console.log("mouse out")}
            />
          </VuiFlexItem>
        ))}
      </VuiFlexContainer>

      <VuiSpacer size="s" />

      <VuiFlexContainer>
        {BUTTON_SIZE.map((size) => (
          <VuiFlexItem grow={false} key={size}>
            <VuiIconButton
              aria-label="Example button"
              icon={icon}
              color="primary"
              size={size}
              isDisabled={isDisabled}
            />
          </VuiFlexItem>
        ))}
      </VuiFlexContainer>

      <VuiSpacer size="s" />

      <Subsection title="With selected state">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiIconButton
                isSelected
                isDisabled={isDisabled}
                aria-label="Button with selected state"
                icon={icon}
                color={color}
                onClick={() => console.log("click")}
                onMouseOver={() => console.log("mouse over")}
                onMouseOut={() => console.log("mouse out")}
              />
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

      <VuiSpacer size="s" />
      <Subsection title="Icon button with link">
        <VuiFlexContainer alignItems="center" spacing="xs">
          <VuiFlexItem>
            <VuiText>
              <p>Follow the lint to visit Vectara.com</p>
            </VuiText>
          </VuiFlexItem>
          <VuiFlexItem>
            <VuiIconButton
              aria-label="icon with link"
              color="accent"
              href="https://vectara.com"
              target="_blank"
              isDisabled={isDisabled}
              icon={
                <VuiIcon>
                  <BiLinkExternal />
                </VuiIcon>
              }
            />
          </VuiFlexItem>
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
