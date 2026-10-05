import { BADGE_COLOR, VuiBadge, VuiFlexContainer, VuiFlexItem } from "../../../lib";
import { Subsection } from "../../components/Subsection";

const CUSTOM_COLORS = ["#1e3a8a", "#7c3aed", "#f472b6", "#facc15", "#a7f3d0", "#111111", "#f5f5f5"] as const;

export const BadgeColors = () => {
  return (
    <>
      <Subsection title="Large">
        <VuiFlexContainer>
          {BADGE_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiBadge size="l" color={color}>
                Color {color}
              </VuiBadge>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

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

      <Subsection title="Custom hex colors">
        <VuiFlexContainer>
          {CUSTOM_COLORS.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiBadge size="m" color={color}>
                Color {color}
              </VuiBadge>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
