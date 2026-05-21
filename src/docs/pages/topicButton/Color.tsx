import { BiEditAlt } from "react-icons/bi";
import { VuiFlexContainer, VuiFlexItem, VuiIcon, VuiText, VuiTopicButton } from "../../../lib";

export const Color = () => {
  return (
    <VuiFlexContainer direction="column" spacing="m">
      {(["primary", "accent"] as const).map((color) => (
        <VuiFlexItem key={color} grow={1}>
          <VuiTopicButton
            color={color}
            title={`${color} topic button`}
            icon={
              <VuiIcon color={color}>
                <BiEditAlt />
              </VuiIcon>
            }
            fullWidth
            badges={[{ label: `${color.charAt(0).toUpperCase() + color.slice(1)}`, color }]}
          >
            <VuiText>
              <p>Colors the title and hover shadow to match the {color} color.</p>
            </VuiText>
          </VuiTopicButton>
        </VuiFlexItem>
      ))}
    </VuiFlexContainer>
  );
};
