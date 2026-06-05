import {
  Area,
  AreaChart as RechartsAreaChart,
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

// "line" draws bare lines; "area" fills beneath each line with a translucent
// wash; "stacked-area" stacks those areas so they sum rather than overlap.
export type LineChartVariant = "line" | "area" | "stacked-area";

type Props = {
  // The rows to plot. Each row holds the category value plus one value per series.
  data: Array<Record<string, string | number>>;
  // Key into each datum that holds the category label for the x-axis.
  categoryKey: string;
  series: LineChartSeries[];
  variant?: LineChartVariant;
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
  variant = "line",
  curved = false,
  showPoints = true,
  height = 320,
  showLegend = series.length > 1,
  showGrid = true,
  showTooltip = true,
  ...rest
}: Props) => {
  const isArea = variant === "area" || variant === "stacked-area";
  const isStacked = variant === "stacked-area";

  const axes = (
    <>
      {showGrid && <CartesianGrid stroke="var(--vui-color-border-light)" vertical={false} />}
      <XAxis dataKey={categoryKey} tick={chartTickStyle} axisLine={chartAxisLineStyle} tickLine={false} />
      <YAxis tick={chartTickStyle} axisLine={chartAxisLineStyle} tickLine={false} />
      {showTooltip && <Tooltip cursor={{ stroke: "var(--vui-color-border-medium)" }} {...chartTooltipProps} />}
      {showLegend && <Legend {...chartLegendProps} />}
    </>
  );

  // Shared marker props keep lines and areas visually identical apart from the fill.
  const markProps = (s: LineChartSeries, index: number) => {
    const color = s.color ? getChartColor(s.color) : getChartColorByIndex(index);
    return {
      key: s.dataKey,
      type: curved ? ("monotone" as const) : ("linear" as const),
      dataKey: s.dataKey,
      name: s.name ?? s.dataKey,
      stroke: color,
      strokeWidth: 2,
      dot: showPoints ? { r: 3, strokeWidth: 0, fill: color } : false,
      activeDot: { r: 5 }
    };
  };

  return (
    <div className="vuiLineChart" {...rest}>
      <ResponsiveContainer width="100%" height={height}>
        {isArea ? (
          <RechartsAreaChart data={data}>
            {axes}
            {series.map((s, index) => {
              const props = markProps(s, index);
              // Stacked areas tile rather than overlap, so they take a more solid
              // fill; overlapping areas stay translucent to remain readable.
              return (
                <Area
                  {...props}
                  fill={props.stroke}
                  fillOpacity={isStacked ? 0.85 : 0.2}
                  stackId={isStacked ? "stack" : undefined}
                />
              );
            })}
          </RechartsAreaChart>
        ) : (
          <RechartsLineChart data={data}>
            {axes}
            {series.map((s, index) => (
              <Line {...markProps(s, index)} />
            ))}
          </RechartsLineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};
