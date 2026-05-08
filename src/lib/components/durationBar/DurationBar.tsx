import classNames from "classnames";
import { PROGRESS_BAR_COLOR } from "../progressBar/ProgressBar";

const DEFAULT_MIN_BAR_WIDTH_PX = 4;

type Props = {
  // The total length of the window the bar lives within.
  window: number;
  // The bar's start and end positions within the window.
  start: number;
  end: number;
  color: (typeof PROGRESS_BAR_COLOR)[number];
  minBarWidthPx?: number;
  className?: string;
};

export const VuiDurationBar = ({
  window,
  start,
  end,
  color,
  minBarWidthPx = DEFAULT_MIN_BAR_WIDTH_PX,
  className
}: Props) => {
  // Clamp the bar to the window boundaries.
  const clampedStart = Math.max(0, Math.min(start, window));
  const clampedEnd = Math.max(0, Math.min(end, window));

  const leftPercent = (clampedStart / window) * 100;
  const widthPercent = Math.max(0, ((clampedEnd - clampedStart) / window) * 100);

  const classes = classNames(className, "vuiDurationBar", `vuiDurationBar--${color}`);

  return (
    <div className={classes}>
      <div
        className="vuiDurationBar__bar"
        style={{ left: `${leftPercent}%`, width: `max(${widthPercent}%, ${minBarWidthPx}px)` }}
      />
    </div>
  );
};
