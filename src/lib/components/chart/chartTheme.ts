// Shared styling for chart primitives, wired to theme variables so every chart
// type renders with the same axes, tooltip, and legend treatment.

export const chartTickStyle = { fill: "var(--vui-color-label)", fontSize: 12 };

export const chartAxisLineStyle = { stroke: "var(--vui-color-border-medium)" };

export const chartTooltipProps = {
  contentStyle: {
    backgroundColor: "var(--vui-color-empty-shade)",
    border: "1px solid var(--vui-color-border-light)",
    borderRadius: 6,
    color: "var(--vui-color-text)"
  }
};

export const chartLegendProps = { wrapperStyle: { fontSize: 12, color: "var(--vui-color-label)" } };
