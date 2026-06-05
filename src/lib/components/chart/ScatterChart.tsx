import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart as RechartsScatterChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { PatchColor } from "../patch/VuiPatch";
import { getChartColor, getChartColorByIndex } from "./palette";
import { chartAxisLineStyle, chartLegendProps, chartTickStyle, chartTooltipProps } from "./chartTheme";

export type ScatterSeries = {
  // The points to plot, each holding an x and y value.
  data: Array<Record<string, number>>;
  // Human-readable label shown in the legend and tooltip.
  name?: string;
  // Override the auto-assigned palette color with a categorical hue.
  color?: PatchColor;
};

// Recharts passes the hovered point's geometry to the active shape.
type ActivePointProps = {
  cx?: number;
  cy?: number;
};

const DEFAULT_RADIUS = 4;
const ACTIVE_RADIUS = 7;

type Props = {
  series: ScatterSeries[];
  // Keys into each point that hold its x and y values.
  xKey?: string;
  yKey?: string;
  height?: number;
  showLegend?: boolean;
  showGrid?: boolean;
  showTooltip?: boolean;
  "data-testid"?: string;
};

export const VuiScatterChart = ({
  series,
  xKey = "x",
  yKey = "y",
  height = 320,
  showLegend = series.length > 1,
  showGrid = true,
  showTooltip = true,
  ...rest
}: Props) => {
  // Recharts fires activeShape for the active point of every series at the
  // shared hover index, which would light up points across colors at once.
  // Tracking the hovered series lets only that series emphasize its point;
  // the others render an ordinary dot.
  const [hoveredSeries, setHoveredSeries] = useState<number | null>(null);

  return (
    <div className="vuiScatterChart" {...rest}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsScatterChart>
          {showGrid && <CartesianGrid stroke="var(--vui-color-border-light)" />}
          <XAxis type="number" dataKey={xKey} tick={chartTickStyle} axisLine={chartAxisLineStyle} tickLine={false} />
          <YAxis type="number" dataKey={yKey} tick={chartTickStyle} axisLine={chartAxisLineStyle} tickLine={false} />
          {showTooltip && (
            <Tooltip cursor={{ strokeDasharray: "3 3", stroke: "var(--vui-color-border-medium)" }} {...chartTooltipProps} />
          )}
          {showLegend && <Legend {...chartLegendProps} />}
          {series.map((s, index) => {
            const color = s.color ? getChartColor(s.color) : getChartColorByIndex(index);
            // Only the hovered series rings its active point; ring it with the
            // surface color so it lifts above the points it overlaps.
            const renderActivePoint = ({ cx, cy }: ActivePointProps) =>
              hoveredSeries === index ? (
                <circle cx={cx} cy={cy} r={ACTIVE_RADIUS} fill={color} stroke="var(--vui-color-empty-shade)" strokeWidth={2} />
              ) : (
                <circle cx={cx} cy={cy} r={DEFAULT_RADIUS} fill={color} />
              );

            return (
              <Scatter
                key={s.name ?? index}
                name={s.name}
                data={s.data}
                fill={color}
                activeShape={renderActivePoint}
                onMouseEnter={() => setHoveredSeries(index)}
                onMouseLeave={() => setHoveredSeries(null)}
              />
            );
          })}
        </RechartsScatterChart>
      </ResponsiveContainer>
    </div>
  );
};
