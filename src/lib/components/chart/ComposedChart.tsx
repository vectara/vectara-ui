import {
  Bar,
  CartesianGrid,
  ComposedChart as RechartsComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { PatchColor } from "../patch/VuiPatch";
import { getChartColor, getChartColorByIndex } from "./palette";
import { chartAxisLineStyle, chartLegendProps, chartTickStyle, chartTooltipProps } from "./chartTheme";

export type ComposedSeries = {
  // Key into each datum that holds this series' value.
  dataKey: string;
  // Whether to draw this series as bars or a line.
  type: "bar" | "line";
  // Human-readable label shown in the legend and tooltip. Defaults to dataKey.
  name?: string;
  // Override the auto-assigned palette color with a categorical hue.
  color?: PatchColor;
  // Which y-axis to measure against. A right axis appears when any series uses
  // it, letting two metrics on different scales share the chart.
  axis?: "left" | "right";
  // Smooth the line between points. Applies to line series.
  curved?: boolean;
};

type Props = {
  // The rows to plot. Each row holds the category value plus one value per series.
  data: Array<Record<string, string | number>>;
  // Key into each datum that holds the category label for the x-axis.
  categoryKey: string;
  series: ComposedSeries[];
  height?: number;
  showLegend?: boolean;
  showGrid?: boolean;
  showTooltip?: boolean;
  "data-testid"?: string;
};

export const VuiComposedChart = ({
  data,
  categoryKey,
  series,
  height = 320,
  showLegend = series.length > 1,
  showGrid = true,
  showTooltip = true,
  ...rest
}: Props) => {
  const hasRightAxis = series.some((s) => s.axis === "right");

  return (
    <div className="vuiComposedChart" {...rest}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsComposedChart data={data}>
          {showGrid && <CartesianGrid stroke="var(--vui-color-border-light)" vertical={false} />}
          <XAxis dataKey={categoryKey} tick={chartTickStyle} axisLine={chartAxisLineStyle} tickLine={false} />
          <YAxis yAxisId="left" tick={chartTickStyle} axisLine={chartAxisLineStyle} tickLine={false} />
          {hasRightAxis && (
            <YAxis yAxisId="right" orientation="right" tick={chartTickStyle} axisLine={chartAxisLineStyle} tickLine={false} />
          )}
          {showTooltip && <Tooltip cursor={{ fill: "var(--vui-color-light-shade)" }} {...chartTooltipProps} />}
          {showLegend && <Legend {...chartLegendProps} />}
          {series.map((s, index) => {
            const color = s.color ? getChartColor(s.color) : getChartColorByIndex(index);
            const yAxisId = s.axis ?? "left";
            const name = s.name ?? s.dataKey;

            if (s.type === "bar") {
              return (
                <Bar
                  key={s.dataKey}
                  yAxisId={yAxisId}
                  dataKey={s.dataKey}
                  name={name}
                  fill={color}
                  radius={[4, 4, 0, 0]}
                  stroke="var(--vui-color-empty-shade)"
                  strokeWidth={1}
                />
              );
            }

            return (
              <Line
                key={s.dataKey}
                yAxisId={yAxisId}
                type={s.curved ? "monotone" : "linear"}
                dataKey={s.dataKey}
                name={name}
                stroke={color}
                strokeWidth={2}
                dot={{ r: 3, strokeWidth: 0, fill: color }}
                activeDot={{ r: 5 }}
              />
            );
          })}
        </RechartsComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
