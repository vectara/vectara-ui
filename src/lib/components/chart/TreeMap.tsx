import { ResponsiveContainer, Tooltip, Treemap } from "recharts";
import { PatchColor } from "../patch/VuiPatch";
import { getChartColor, getChartColorByIndex } from "./palette";
import { chartTooltipProps } from "./chartTheme";

type Props = {
  // The rows to plot. Each row holds a label and either a value (flat) or a
  // nested array of child rows (when childrenKey is set).
  data: Array<Record<string, unknown>>;
  // Key into each datum that holds the cell label.
  categoryKey: string;
  // Key into each leaf datum that holds its value, which sets its area.
  valueKey: string;
  // Key into each datum that holds its child rows. Set this for a nested tree
  // map; leave it unset for a flat one.
  childrenKey?: string;
  // Override the auto-assigned palette colors, one categorical hue per
  // top-level block.
  colors?: PatchColor[];
  height?: number;
  showTooltip?: boolean;
  "data-testid"?: string;
};

// Recharts injects geometry, depth, and the datum's fields into the content element.
type CellProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  depth?: number;
  name?: string;
  fill?: string;
  // The depth at which nodes are leaves: 1 for a flat tree, 2 for a nested one.
  leafDepth?: number;
};

// Leaves render as palette-colored cells separated by a stroke; parent blocks
// render as an outline that delineates the group its children fill.
const TreeMapCell = ({ x = 0, y = 0, width = 0, height = 0, depth = 0, name = "", fill = "", leafDepth = 1 }: CellProps) => {
  if (depth === leafDepth) {
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill={fill} stroke="var(--vui-color-empty-shade)" strokeWidth={1.5} />
        {width > 50 && height > 22 && (
          <text x={x + 6} y={y + 16} fill="var(--vui-color-empty-shade)" fontSize={11} fontWeight={600}>
            {name}
          </text>
        )}
      </g>
    );
  }

  if (depth >= 1) {
    return <rect x={x} y={y} width={width} height={height} fill="none" stroke="var(--vui-color-dark-shade)" strokeWidth={2} />;
  }

  return null;
};

export const VuiTreeMap = ({
  data,
  categoryKey,
  valueKey,
  childrenKey,
  colors,
  height = 320,
  showTooltip = true,
  ...rest
}: Props) => {
  const colorFor = (index: number) => (colors?.[index] ? getChartColor(colors[index]) : getChartColorByIndex(index));

  // Build the shape Recharts expects, embedding each node's fill so the content
  // element can color it. Children of a block share the block's hue.
  const treeData = data.map((datum, index) => {
    const color = colorFor(index);
    const name = String(datum[categoryKey]);
    const children = childrenKey ? (datum[childrenKey] as Array<Record<string, unknown>> | undefined) : undefined;

    if (children) {
      return {
        name,
        fill: color,
        children: children.map((child) => ({
          name: String(child[categoryKey]),
          value: Number(child[valueKey]),
          fill: color
        }))
      };
    }

    return { name, value: Number(datum[valueKey]), fill: color };
  });

  const leafDepth = childrenKey ? 2 : 1;

  return (
    <div className="vuiTreeMap" {...rest}>
      <ResponsiveContainer width="100%" height={height}>
        <Treemap data={treeData} dataKey="value" isAnimationActive={false} content={<TreeMapCell leafDepth={leafDepth} />}>
          {showTooltip && <Tooltip {...chartTooltipProps} />}
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};
