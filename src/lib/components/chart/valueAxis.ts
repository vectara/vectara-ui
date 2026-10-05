// How a chart's value axis is drawn. A caller that knows what its values mean
// (milliseconds it labels as minutes, say) picks ticks that are round in the
// unit it shows and leave space above the peak. The chart supplies the extent
// of what it plots and how many tick intervals fit its height.

export type ValueExtent = {
  // Smallest and largest plotted value. Stacked charts report the running
  // stack totals, which are what the chart actually draws.
  min: number;
  max: number;
  // Whether every plotted value is an integer, so an axis can avoid fractional ticks.
  integral: boolean;
};

export type ValueAxisHints = {
  // The most tick intervals that fit the chart with legible labels.
  maxIntervals: number;
};

export type ValueAxisScale = {
  // Every tick to draw, ascending, in the data's unit. At least two; the axis
  // spans the first to the last.
  ticks: number[];
  // Labels the ticks. Defaults to the chart's formatValue.
  formatTick?: (value: number) => string;
};

export type ValueAxis = (extent: ValueExtent, hints: ValueAxisHints) => ValueAxisScale;

type Row = Record<string, string | number>;

const isPlottable = (value: unknown): value is number => typeof value === "number" && Number.isFinite(value);

export const valueExtent = (rows: Row[], keys: string[], stacked: boolean): ValueExtent => {
  let min = Infinity;
  let max = -Infinity;
  let integral = true;
  const include = (value: number) => {
    min = Math.min(min, value);
    max = Math.max(max, value);
  };

  for (const row of rows) {
    let total = 0;
    for (const key of keys) {
      const value = row[key];
      if (!isPlottable(value)) continue;
      integral = integral && Number.isInteger(value);
      if (stacked) {
        total += value;
        include(total);
      } else {
        include(value);
      }
    }
  }

  return min === Infinity ? { min: 0, max: 0, integral: true } : { min, max, integral };
};

// Vertical room for one tick label at the theme's 12px tick font, with a gap.
const TICK_PITCH_PX = 24;
// Recharts' default margins plus the category axis, which the plot never gets.
const PLOT_INSET_PX = 40;
const LEGEND_PX = 30;

export const maxIntervalsForHeight = (height: number, showLegend: boolean): number => {
  const plotHeight = height - PLOT_INSET_PX - (showLegend ? LEGEND_PX : 0);
  return Math.min(10, Math.max(2, Math.floor(plotHeight / TICK_PITCH_PX)));
};

// Recharts axis props that draw a scale: its ticks, a domain that ends on
// them, and no label thinning, since the scale was already sized to fit.
export const valueAxisProps = (scale: ValueAxisScale, formatValue?: (value: number) => string) => ({
  ticks: scale.ticks,
  domain: [scale.ticks[0], scale.ticks[scale.ticks.length - 1]] as [number, number],
  interval: 0 as const,
  tickFormatter: scale.formatTick ?? formatValue
});
