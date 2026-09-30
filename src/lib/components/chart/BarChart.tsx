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
import {
  chartAxisLineStyle,
  chartLegendProps,
  chartTickStyle,
  chartTooltipProps,
  chartValueAxisMargin
} from "./chartTheme";
import { ValueAxis, maxIntervalsForHeight, valueAxisProps, valueExtent } from "./valueAxis";

export type BarChartSeries = {
  // Key into each datum that holds this series' value.
  dataKey: string;
  // Human-readable label shown in the legend and tooltip. Defaults to dataKey.
  name?: string;
  // Override the auto-assigned categorical hue.
  color?: PatchColor;
};

// A horizontal value axis runs across the chart's unknown width, so it takes a
// fixed budget of labels rather than one sized from the height.
const HORIZONTAL_MAX_INTERVALS = 6;

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
  // Formats tooltip values and, unless valueAxis labels them, value-axis ticks,
  // e.g. milliseconds to "1.2s".
  formatValue?: (value: number) => string;
  // Chooses the value-axis ticks from the extent of the plotted values, for
  // callers that want ticks round in the unit they label (whole minutes for
  // millisecond data, say) with space above the peak. Tooltips keep formatValue.
  valueAxis?: ValueAxis;
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
  valueAxis,
  ...rest
}: Props) => {
  const isHorizontal = orientation === "bars";
  const scale = valueAxis?.(
    valueExtent(
      data,
      series.map((s) => s.dataKey),
      stacked
    ),
    { maxIntervals: isHorizontal ? HORIZONTAL_MAX_INTERVALS : maxIntervalsForHeight(height, showLegend) }
  );
  const categoryAxis = (
    <>
      {isHorizontal ? (
        <YAxis
          type="category"
          dataKey={categoryKey}
          tick={chartTickStyle}
          axisLine={chartAxisLineStyle}
          tickLine={false}
        />
      ) : (
        <XAxis
          type="category"
          dataKey={categoryKey}
          tick={chartTickStyle}
          axisLine={chartAxisLineStyle}
          tickLine={false}
        />
      )}
    </>
  );
  const valueAxisElement = isHorizontal ? (
    <XAxis
      type="number"
      tick={chartTickStyle}
      axisLine={chartAxisLineStyle}
      tickLine={false}
      {...(scale ? valueAxisProps(scale, formatValue) : { tickFormatter: formatValue })}
    />
  ) : (
    <YAxis
      type="number"
      tick={chartTickStyle}
      axisLine={chartAxisLineStyle}
      tickLine={false}
      {...(scale ? { ...valueAxisProps(scale, formatValue), width: "auto" as const } : { tickFormatter: formatValue })}
    />
  );

  return (
    <div className="vuiBarChart" {...rest}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          layout={isHorizontal ? "vertical" : "horizontal"}
          syncId={syncId}
          syncMethod={syncMethod}
          {...(scale && { margin: chartValueAxisMargin })}
        >
          {showGrid && (
            <CartesianGrid stroke="var(--vui-color-border-light)" vertical={isHorizontal} horizontal={!isHorizontal} />
          )}
          {categoryAxis}
          {valueAxisElement}
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
