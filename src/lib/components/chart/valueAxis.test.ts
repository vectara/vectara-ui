import { maxIntervalsForHeight, valueAxisProps, valueExtent } from "./valueAxis";

describe("valueExtent", () => {
  test("spans the plotted values across every series", () => {
    const rows = [
      { month: "Jan", queries: 3, documents: 10 },
      { month: "Feb", queries: -2, documents: 7 }
    ];
    expect(valueExtent(rows, ["queries", "documents"], false)).toEqual({ min: -2, max: 10, integral: true });
  });

  test("reports fractional values so an axis can allow decimal ticks", () => {
    expect(valueExtent([{ day: "Mon", rating: 1.5 }], ["rating"], false)).toEqual({
      min: 1.5,
      max: 1.5,
      integral: false
    });
  });

  test("ignores missing, non-numeric and non-finite values", () => {
    const rows: Array<Record<string, string | number>> = [
      { bin: "a", p50: 40 },
      { bin: "b", p50: NaN, p99: Infinity },
      { bin: "c", p50: "n/a", p99: 90 }
    ];
    expect(valueExtent(rows, ["p50", "p99"], false)).toEqual({ min: 40, max: 90, integral: true });
  });

  test("is a zero extent when nothing is plotted", () => {
    expect(valueExtent([{ bin: "a" }], ["value"], false)).toEqual({ min: 0, max: 0, integral: true });
    expect(valueExtent([], ["value"], false)).toEqual({ min: 0, max: 0, integral: true });
  });

  test("spans the running stack totals when stacked", () => {
    expect(valueExtent([{ bin: "a", x: 5, y: 8 }], ["x", "y"], true)).toEqual({ min: 5, max: 13, integral: true });
    expect(valueExtent([{ bin: "a", x: 5, y: -8, z: 2 }], ["x", "y", "z"], true)).toEqual({
      min: -3,
      max: 5,
      integral: true
    });
  });
});

describe("maxIntervalsForHeight", () => {
  test.each([
    [260, false, 9],
    [260, true, 7],
    [220, false, 7],
    [220, true, 6],
    [320, false, 10],
    [100, false, 2]
  ])("height %i with legend %s fits %i intervals", (height, showLegend, expected) => {
    expect(maxIntervalsForHeight(height, showLegend)).toBe(expected);
  });
});

describe("valueAxisProps", () => {
  const formatValue = (value: number) => `${value}`;

  test("pins the domain to the ticks, keeps every label and labels with formatTick", () => {
    const formatTick = (value: number) => `${value}s`;
    expect(valueAxisProps({ ticks: [0, 5, 10], formatTick }, formatValue)).toEqual({
      ticks: [0, 5, 10],
      domain: [0, 10],
      interval: 0,
      tickFormatter: formatTick
    });
  });

  test("labels with formatValue when the scale names no formatter", () => {
    expect(valueAxisProps({ ticks: [0, 1] }, formatValue).tickFormatter).toBe(formatValue);
  });
});
