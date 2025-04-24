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
import { Subsection } from "../../components/Subsection";

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
            <VuiIconButton
              aria-label="Example button"
              icon={icon}
              color={color}
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
            <VuiIconButton aria-label="Example button" icon={icon} color="primary" size={size} />
          </VuiFlexItem>
        ))}
      </VuiFlexContainer>

      <VuiSpacer size="s" />

      <Subsection title="With active state">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiIconButton
                isActive
                aria-label="Button with active state"
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
    </>
  );
};
