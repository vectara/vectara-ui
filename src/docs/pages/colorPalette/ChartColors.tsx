import {
  CHART_PALETTES,
  ChartPaletteName,
  VuiCopyButton,
  VuiFlexContainer,
  VuiFlexItem,
  VuiSpacer,
  VuiText,
  VuiTextColor,
  VuiTitle
} from "../../../lib";

// Chart colors are an ordered palette for plotting data series, distinct from the categorical chip hues.
// VuiContextProvider's chartPalette prop chooses which palette fills the --vui-chart-* variables. The palette
// is capped at eight — the practical limit for telling categories apart by color alone.
const palettes: Array<{ name: ChartPaletteName; title: string; description: string; hues: string[] }> = [
  {
    name: "accessible",
    title: "Accessible (default)",
    description:
      "Each color contrasts with its neighbors in both hue and lightness, keeping series distinct for color-blind readers and in grayscale.",
    hues: ["Blue", "Orange", "Teal-green", "Mauve", "Sky", "Vermillion", "Gold", "Slate"]
  },
  {
    name: "aesthetic",
    title: "Aesthetic",
    description:
      "Leads with the brand violet, paired with bright cool and warm hues of even intensity. More cohesive and expressive, at some cost to color-blind legibility.",
    hues: ["Violet", "Sky", "Coral", "Teal", "Apricot", "Orchid", "Sage", "Slate"]
  }
];

export const ChartColors = () => {
  return (
    <>
      <VuiText>
        <p>
          <VuiTextColor color="subdued">
            An ordered palette for data visualization, assigned to series in sequence. Choose a palette with the{" "}
            <code>chartPalette</code> prop on <code>VuiContextProvider</code>. Use no more than eight colors; beyond
            that, group categories or add a non-color cue such as a pattern or direct label.
          </VuiTextColor>
        </p>
      </VuiText>

      {palettes.map(({ name, title, description, hues }) => {
        const colors = Object.values(CHART_PALETTES[name].light);

        return (
          <div key={name}>
            <VuiSpacer size="l" />

            <VuiTitle size="xs">
              <h3>{title}</h3>
            </VuiTitle>

            <VuiSpacer size="xs" />

            <VuiText size="s">
              <p>
                <VuiTextColor color="subdued">{description}</VuiTextColor>
              </p>
            </VuiText>

            <VuiSpacer size="m" />

            <VuiFlexContainer spacing="l" wrap>
              {colors.map((color, index) => {
                const variable = `--vui-chart-${index + 1}`;

                return (
                  <VuiFlexItem grow={false} key={variable}>
                    <div style={{ width: 140 }}>
                      {/* A solid swatch in the series color. */}
                      <div style={{ height: 48, borderRadius: 6, backgroundColor: color }} />

                      <VuiSpacer size="s" />

                      <VuiText size="xs">
                        <p>
                          <strong>{hues[index]}</strong> <VuiTextColor color="subdued">{color}</VuiTextColor>
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
                );
              })}
            </VuiFlexContainer>
          </div>
        );
      })}
    </>
  );
};
