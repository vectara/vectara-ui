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
  "data-testid"?: string;
};

const tickStyle = { fill: "var(--vui-color-label)", fontSize: 12 };
const axisLineStyle = { stroke: "var(--vui-color-border-medium)" };

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
  ...rest
}: Props) => {
  const isHorizontal = orientation === "bars";
  const categoryAxis = (
    <>
      {isHorizontal ? (
        <YAxis type="category" dataKey={categoryKey} tick={tickStyle} axisLine={axisLineStyle} tickLine={false} />
      ) : (
        <XAxis type="category" dataKey={categoryKey} tick={tickStyle} axisLine={axisLineStyle} tickLine={false} />
      )}
    </>
  );
  const valueAxis = isHorizontal ? (
    <XAxis type="number" tick={tickStyle} axisLine={axisLineStyle} tickLine={false} />
  ) : (
    <YAxis type="number" tick={tickStyle} axisLine={axisLineStyle} tickLine={false} />
  );

  return (
    <div className="vuiBarChart" {...rest}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart data={data} layout={isHorizontal ? "vertical" : "horizontal"}>
          {showGrid && (
            <CartesianGrid stroke="var(--vui-color-border-light)" vertical={isHorizontal} horizontal={!isHorizontal} />
          )}
          {categoryAxis}
          {valueAxis}
          {showTooltip && (
            <Tooltip
              cursor={{ fill: "var(--vui-color-light-shade)" }}
              contentStyle={{
                backgroundColor: "var(--vui-color-empty-shade)",
                border: "1px solid var(--vui-color-border-light)",
                borderRadius: 6,
                color: "var(--vui-color-text)"
              }}
            />
          )}
          {showLegend && <Legend wrapperStyle={{ fontSize: 12, color: "var(--vui-color-label)" }} />}
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
