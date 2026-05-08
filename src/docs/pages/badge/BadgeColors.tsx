import { BADGE_COLOR, VuiBadge, VuiFlexContainer, VuiFlexItem } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const BadgeColors = () => {
  return (
    <>
      <Subsection title="Medium">
        <VuiFlexContainer>
          {BADGE_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiBadge size="m" color={color}>
                Color {color}
              </VuiBadge>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Small">
        <VuiFlexContainer>
          {BADGE_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiBadge size="s" color={color}>
                Color {color}
              </VuiBadge>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
