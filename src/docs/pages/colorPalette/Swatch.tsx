import { VuiCopyButton, VuiFlexContainer, VuiFlexItem, VuiSpacer, VuiText, VuiTextColor } from "../../../lib";

type Props = {
  // Friendly name for the color.
  name: string;
  // The CSS custom property exposed by the theme, e.g. "--vui-color-primary-shade".
  cssVariable: string;
  // The value resolved in the light theme, shown for reference.
  value?: string;
};

// Renders a single theme color as a live swatch alongside its CSS variable and value.
// The swatch fills itself with var(cssVariable), so it always reflects the active theme.
export const Swatch = ({ name, cssVariable, value }: Props) => {
  return (
    <VuiFlexItem grow={false}>
      <div style={{ width: 200 }}>
        <div
          style={{
            height: 64,
            borderRadius: 6,
            backgroundColor: `var(${cssVariable})`,
            border: "1px solid var(--vui-color-border-medium)"
          }}
        />

        <VuiSpacer size="xs" />

        <VuiText size="xs">
          <p>
            <strong>{name}</strong>
          </p>
        </VuiText>

        <VuiFlexContainer alignItems="center" spacing="xs" justifyContent="spaceBetween">
          <VuiFlexItem grow={false}>
            <VuiText size="xs">
              <p>
                <code>{cssVariable}</code>
              </p>
            </VuiText>
          </VuiFlexItem>

          <VuiFlexItem grow={false}>
            <VuiCopyButton size="xs" value={`var(${cssVariable})`} title={`Copy var(${cssVariable})`} />
          </VuiFlexItem>
        </VuiFlexContainer>

        {value && (
          <VuiText size="xs">
            <p>
              <VuiTextColor color="subdued">{value}</VuiTextColor>
            </p>
          </VuiText>
        )}
      </div>
    </VuiFlexItem>
  );
};
