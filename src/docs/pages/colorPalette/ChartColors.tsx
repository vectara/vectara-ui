import { VuiCopyButton, VuiFlexContainer, VuiFlexItem, VuiSpacer, VuiText, VuiTextColor } from "../../../lib";

// Chart colors are an ordered palette for plotting data series, distinct from the categorical chip hues.
// Each entry differs from its neighbors in both hue and luminance, so series stay distinguishable under
// color vision deficiency and in grayscale. The palette is capped at eight — the practical limit for
// telling categories apart by color alone.
const chartColors = [
  { name: "Chart 1", variable: "--vui-chart-1", description: "Blue" },
  { name: "Chart 2", variable: "--vui-chart-2", description: "Orange" },
  { name: "Chart 3", variable: "--vui-chart-3", description: "Teal-green" },
  { name: "Chart 4", variable: "--vui-chart-4", description: "Mauve" },
  { name: "Chart 5", variable: "--vui-chart-5", description: "Sky" },
  { name: "Chart 6", variable: "--vui-chart-6", description: "Vermillion" },
  { name: "Chart 7", variable: "--vui-chart-7", description: "Gold" },
  { name: "Chart 8", variable: "--vui-chart-8", description: "Slate" }
];

export const ChartColors = () => {
  return (
    <>
      <VuiText>
        <p>
          <VuiTextColor color="subdued">
            An ordered palette for data visualization, assigned to series in sequence. Each color contrasts
            with its neighbors in both hue and lightness, keeping series distinct for color-blind readers and
            in grayscale. Use no more than eight; beyond that, group categories or add a non-color cue such as
            a pattern or direct label.
          </VuiTextColor>
        </p>
      </VuiText>

      <VuiSpacer size="l" />

      <VuiFlexContainer spacing="l" wrap>
        {chartColors.map(({ name, variable, description }) => (
          <VuiFlexItem grow={false} key={name}>
            <div style={{ width: 160 }}>
              {/* A solid swatch in the series color. */}
              <div style={{ height: 64, borderRadius: 6, backgroundColor: `var(${variable})` }} />

              <VuiSpacer size="s" />

              <VuiText size="xs">
                <p>
                  <strong>{name}</strong> <VuiTextColor color="subdued">{description}</VuiTextColor>
                </p>
              </VuiText>

              <VuiFlexContainer alignItems="center" spacing="xs" justifyContent="spaceBetween">
                <VuiFlexItem grow={false}>
                  <VuiText size="xs">
                    <p>
                      <code>{variable}</code>
                    </p>
                  </VuiText>
                </VuiFlexItem>

                <VuiFlexItem grow={false}>
                  <VuiCopyButton size="xs" value={`var(${variable})`} title={`Copy var(${variable})`} />
                </VuiFlexItem>
              </VuiFlexContainer>
            </div>
          </VuiFlexItem>
        ))}
      </VuiFlexContainer>
    </>
  );
};
