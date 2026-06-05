import { VuiPieChart, VuiSpacer, VuiText, VuiTextColor } from "../../../lib";

// 24 categories exceed what a pie can show well. The palette shifts lightness on each wrap so the
// repeated hues stay distinct, but the wedges are still too thin to compare. Prefer grouping the long
// tail into an "Other" slice, or switch to a sorted bar chart.
const data = [
  { label: "Category 1", value: 100 },
  { label: "Category 2", value: 97 },
  { label: "Category 3", value: 94 },
  { label: "Category 4", value: 91 },
  { label: "Category 5", value: 88 },
  { label: "Category 6", value: 85 },
  { label: "Category 7", value: 82 },
  { label: "Category 8", value: 79 },
  { label: "Category 9", value: 76 },
  { label: "Category 10", value: 73 },
  { label: "Category 11", value: 70 },
  { label: "Category 12", value: 67 },
  { label: "Category 13", value: 64 },
  { label: "Category 14", value: 61 },
  { label: "Category 15", value: 58 },
  { label: "Category 16", value: 55 },
  { label: "Category 17", value: 52 },
  { label: "Category 18", value: 49 },
  { label: "Category 19", value: 46 },
  { label: "Category 20", value: 43 },
  { label: "Category 21", value: 40 },
  { label: "Category 22", value: 37 },
  { label: "Category 23", value: 34 },
  { label: "Category 24", value: 31 }
];

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
