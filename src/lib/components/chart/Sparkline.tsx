import { Bar, BarChart, Line, LineChart } from "recharts";
import { PatchColor } from "../patch/VuiPatch";
import { getChartColor, getChartColorByIndex } from "./palette";

type Props = {
  // The rows to plot. Only the one value key is read; there are no axes.
  data: Array<Record<string, string | number>>;
  // Key into each datum that holds the value.
  dataKey: string;
  variant?: "line" | "bar";
  // Override the default palette color with a categorical hue.
  color?: PatchColor;
  // Smooth the line between points. Ignored by the bar variant.
  curved?: boolean;
  width?: number;
  height?: number;
  "data-testid"?: string;
};

// A compact, axis-free trend meant to sit inline beside a number or in a table
// cell. It renders at a fixed size rather than filling its container.
export const VuiSparkline = ({
  data,
  dataKey,
  variant = "line",
  color,
  curved = true,
  width = 120,
  height = 32,
  ...rest
}: Props) => {
  const fill = color ? getChartColor(color) : getChartColorByIndex(0);

  return (
    <div className="vuiSparkline" {...rest}>
      {variant === "bar" ? (
        <BarChart width={width} height={height} data={data} margin={{ top: 1, right: 0, bottom: 1, left: 0 }}>
          <Bar dataKey={dataKey} fill={fill} radius={1} isAnimationActive={false} />
        </BarChart>
      ) : (
        <LineChart width={width} height={height} data={data} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
          <Line
            type={curved ? "monotone" : "linear"}
            dataKey={dataKey}
            stroke={fill}
            strokeWidth={1.5}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      )}
    </div>
  );
};
