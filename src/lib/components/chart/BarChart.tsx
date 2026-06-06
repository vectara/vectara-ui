import {
  Bar,
  CartesianGrid,
  BarChart as RechartsBarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { PatchColor } from "../patch/VuiPatch";
import { getChartColor, getChartColorByIndex } from "./palette";
import { chartAxisLineStyle, chartLegendProps, chartTickStyle, chartTooltipProps } from "./chartTheme";

export type BarChartSeries = {
  // Key into each datum that holds this series' value.
  dataKey: string;
  // Human-readable label shown in the legend and tooltip. Defaults to dataKey.
  name?: string;
  // Override the auto-assigned categorical hue.
  color?: PatchColor;
};

type Props = {
  // The rows to plot. Each row holds the category value plus one value per series.
  data: Array<Record<string, string | number>>;
  // Key into each datum that holds the category label for the axis.
  categoryKey: string;
  series: BarChartSeries[];
  // "columns" draws vertical bars (categories along the x-axis); "bars" draws
  // horizontal bars (categories along the y-axis).
  orientation?: "columns" | "bars";
  stacked?: boolean;
  height?: number;
  showLegend?: boolean;
  showGrid?: boolean;
  showTooltip?: boolean;
  // Charts sharing a syncId highlight the same category when the user hovers any
  // one of them. Omit to leave a chart unsynced.
  syncId?: string;
  // Align the shared cursor by axis "value" rather than by data "index". Use
  // "value" when synced charts have differing point counts. Defaults to "index".
  syncMethod?: "index" | "value";
  // Formats value-axis tick labels and tooltip values, e.g. milliseconds to "1.2s".
  formatValue?: (value: number) => string;
  "data-testid"?: string;
};

export const VuiBarChart = ({
  data,
  categoryKey,
  series,
  orientation = "columns",
  stacked = false,
  height = 320,
  showLegend = series.length > 1,
  showGrid = true,
  showTooltip = true,
  syncId,
  syncMethod,
  formatValue,
  ...rest
}: Props) => {
  const isHorizontal = orientation === "bars";
  const categoryAxis = (
    <>
      {isHorizontal ? (
        <YAxis type="category" dataKey={categoryKey} tick={chartTickStyle} axisLine={chartAxisLineStyle} tickLine={false} />
      ) : (
        <XAxis type="category" dataKey={categoryKey} tick={chartTickStyle} axisLine={chartAxisLineStyle} tickLine={false} />
      )}
    </>
  );
  const valueAxis = isHorizontal ? (
    <XAxis type="number" tick={chartTickStyle} axisLine={chartAxisLineStyle} tickLine={false} tickFormatter={formatValue} />
  ) : (
    <YAxis type="number" tick={chartTickStyle} axisLine={chartAxisLineStyle} tickLine={false} tickFormatter={formatValue} />
  );

  return (
    <div className="vuiBarChart" {...rest}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart data={data} layout={isHorizontal ? "vertical" : "horizontal"} syncId={syncId} syncMethod={syncMethod}>
          {showGrid && (
            <CartesianGrid stroke="var(--vui-color-border-light)" vertical={isHorizontal} horizontal={!isHorizontal} />
          )}
          {categoryAxis}
          {valueAxis}
          {showTooltip && (
            <Tooltip
              cursor={{ fill: "var(--vui-color-light-shade)" }}
              formatter={formatValue && ((value) => (typeof value === "number" ? formatValue(value) : value))}
              {...chartTooltipProps}
            />
          )}
          {showLegend && <Legend {...chartLegendProps} />}
          {series.map((s, index) => (
            <Bar
              key={s.dataKey}
              dataKey={s.dataKey}
              name={s.name ?? s.dataKey}
              fill={s.color ? getChartColor(s.color) : getChartColorByIndex(index)}
              stackId={stacked ? "stack" : undefined}
              radius={isHorizontal ? [0, 4, 4, 0] : [4, 4, 0, 0]}
              // A thin stroke separates touching segments regardless of fill,
              // a redundant cue that aids color-blind readers.
              stroke="var(--vui-color-empty-shade)"
              strokeWidth={1}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};
