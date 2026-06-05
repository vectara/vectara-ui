import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  PieLabelRenderProps,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { PatchColor } from "../patch/VuiPatch";
import { getChartColor, getChartColorByIndex } from "./palette";
import { chartLegendProps, chartTooltipProps } from "./chartTheme";

type Props = {
  // The slices to plot. Each row holds a label and a numeric value.
  data: Array<Record<string, string | number>>;
  // Key into each datum that holds the slice label.
  categoryKey: string;
  // Key into each datum that holds the slice value.
  valueKey: string;
  // Render as a donut with a hollow center.
  donut?: boolean;
  // Override the auto-assigned palette colors, one categorical hue per slice.
  colors?: PatchColor[];
  // Label each slice with its name and percentage, a direct cue that reduces
  // reliance on color and the legend. Hide it for crowded pies.
  showLabels?: boolean;
  height?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
  "data-testid"?: string;
};

const RADIAN = Math.PI / 180;

// Render a slice's name and percentage just outside its arc, anchored so the
// text reads away from the center.
const renderSliceLabel = ({ cx, cy, midAngle, outerRadius, percent, name }: PieLabelRenderProps) => {
  const centerX = Number(cx);
  const centerY = Number(cy);
  const angle = Number(midAngle);
  const radius = Number(outerRadius) + 18;
  const x = centerX + radius * Math.cos(-angle * RADIAN);
  const y = centerY + radius * Math.sin(-angle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="var(--vui-color-text)"
      fontSize={12}
      textAnchor={x > centerX ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${name} (${Math.round(Number(percent) * 100)}%)`}
    </text>
  );
};

export const VuiPieChart = ({
  data,
  categoryKey,
  valueKey,
  donut = false,
  colors,
  showLabels = true,
  height = 320,
  showLegend = true,
  showTooltip = true,
  ...rest
}: Props) => {
  return (
    <div className="vuiPieChart" {...rest}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey={valueKey}
            nameKey={categoryKey}
            innerRadius={donut ? "55%" : 0}
            // Leave room outside the arc for labels when they're shown.
            outerRadius={showLabels ? "70%" : "80%"}
            paddingAngle={1}
            label={showLabels ? renderSliceLabel : undefined}
            labelLine={showLabels ? { stroke: "var(--vui-color-border-medium)" } : false}
            // A stroke between slices separates adjacent colors, a redundant cue
            // that aids color-blind readers.
            stroke="var(--vui-color-empty-shade)"
            strokeWidth={2}
          >
            {data.map((datum, index) => (
              <Cell
                key={String(datum[categoryKey])}
                fill={colors?.[index] ? getChartColor(colors[index]) : getChartColorByIndex(index)}
              />
            ))}
          </Pie>
          {showTooltip && <Tooltip {...chartTooltipProps} />}
          {showLegend && <Legend {...chartLegendProps} />}
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};
