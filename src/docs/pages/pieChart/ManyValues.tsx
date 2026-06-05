import { VuiPieChart, VuiSpacer, VuiText, VuiTextColor } from "../../../lib";

// 24 categories exceed what a pie can show well. The palette shifts lightness on each wrap so the
// repeated hues stay distinct, but the wedges are still too thin to compare. Prefer grouping the long
// tail into an "Other" slice, or switch to a sorted bar chart.
const data = Array.from({ length: 24 }, (_, index) => ({
  label: `Category ${index + 1}`,
  value: 100 - index * 3
}));

export const ManyValues = () => {
  return (
    <>
      <VuiText size="xs">
        <p>
          <VuiTextColor color="subdued">
            The colors no longer repeat exactly. Each wraps past the eighth slice shifts lightness, but the wedges are
            still too thin to compare. Avoid pies with this many categories. Group the long tail into an "Other" slice,
            or switch to a sorted bar chart.
          </VuiTextColor>
        </p>
      </VuiText>

      <VuiSpacer size="s" />

      <VuiPieChart data={data} categoryKey="label" valueKey="value" showLabels={false} height={420} />
    </>
  );
};
