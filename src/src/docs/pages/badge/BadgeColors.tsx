import { BADGE_COLOR, VuiBadge, VuiFlexContainer, VuiFlexItem } from "../../../lib";

export const BadgeColors = () => {
  return (
    <VuiFlexContainer>
      {BADGE_COLOR.map((color) => (
        <VuiFlexItem grow={false} key={color}>
          <VuiBadge color={color}>Color {color}</VuiBadge>
        </VuiFlexItem>
      ))}
    </VuiFlexContainer>
  );
};
