import classNames from "classnames";

export const PROGRESS_CIRCLE_COLOR = ["accent", "primary", "danger", "warning", "success", "neutral"] as const;
export const PROGRESS_CIRCLE_SIZE = ["s", "m"] as const;

const RADIUS = 15;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type Props = {
  color: (typeof PROGRESS_CIRCLE_COLOR)[number];
  percentage: number;
  size?: (typeof PROGRESS_CIRCLE_SIZE)[number];
  // Rendered inside the circle. Only the "m" size has room for it.
  label?: string;
  className?: string;
  "aria-label"?: string;
  "data-testid"?: string;
};

export const VuiProgressCircle = ({
  color,
  percentage,
  size = "m",
  label,
  className,
  "aria-label": ariaLabel,
  ...rest
}: Props) => {
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  const classes = classNames(className, "vuiProgressCircle", `vuiProgressCircle--${size}`, `vuiProgressCircle--${color}`);

  return (
    <span className={classes} role="img" aria-label={ariaLabel ?? `${Math.round(clampedPercentage)}%`} {...rest}>
      <svg className="vuiProgressCircle__svg" viewBox="0 0 36 36">
        <circle className="vuiProgressCircle__track" cx="18" cy="18" r={RADIUS} />
        <circle
          className="vuiProgressCircle__value"
          cx="18"
          cy="18"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - clampedPercentage / 100)}
        />
      </svg>

      {label && size === "m" && <span className="vuiProgressCircle__label">{label}</span>}
    </span>
  );
};
