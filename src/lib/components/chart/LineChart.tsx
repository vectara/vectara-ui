import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { PatchColor } from "../patch/VuiPatch";
import { getChartColor, getChartColorByIndex } from "./palette";
import { chartAxisLineStyle, chartLegendProps, chartTickStyle, chartTooltipProps } from "./chartTheme";

export type LineChartSeries = {
  // Key into each datum that holds this series' value.
  dataKey: string;
  // Human-readable label shown in the legend and tooltip. Defaults to dataKey.
  name?: string;
  // Override the auto-assigned palette color with a categorical hue.
  color?: PatchColor;
};

type Props = {
  // The rows to plot. Each row holds the category value plus one value per series.
  data: Array<Record<string, string | number>>;
  // Key into each datum that holds the category label for the x-axis.
  categoryKey: string;
  series: LineChartSeries[];
  // Smooth the lines between points rather than drawing straight segments.
  curved?: boolean;
  // Draw a dot at each data point.
  showPoints?: boolean;
  height?: number;
  showLegend?: boolean;
  showGrid?: boolean;
  showTooltip?: boolean;
  "data-testid"?: string;
};

export const VuiLineChart = ({
  data,
  categoryKey,
  series,
  curved = false,
  showPoints = true,
  height = 320,
  showLegend = series.length > 1,
  showGrid = true,
  showTooltip = true,
  ...rest
}: Props) => {
  return (
    <div className="vuiLineChart" {...rest}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart data={data}>
          {showGrid && <CartesianGrid stroke="var(--vui-color-border-light)" vertical={false} />}
          <XAxis dataKey={categoryKey} tick={chartTickStyle} axisLine={chartAxisLineStyle} tickLine={false} />
          <YAxis tick={chartTickStyle} axisLine={chartAxisLineStyle} tickLine={false} />
          {showTooltip && (
            <Tooltip cursor={{ stroke: "var(--vui-color-border-medium)" }} {...chartTooltipProps} />
          )}
          {showLegend && <Legend {...chartLegendProps} />}
          {series.map((s, index) => {
            const color = s.color ? getChartColor(s.color) : getChartColorByIndex(index);
            return (
              <Line
                key={s.dataKey}
                type={curved ? "monotone" : "linear"}
                dataKey={s.dataKey}
                name={s.name ?? s.dataKey}
                stroke={color}
                strokeWidth={2}
                dot={showPoints ? { r: 3, strokeWidth: 0, fill: color } : false}
                activeDot={{ r: 5 }}
              />
            );
          })}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};
