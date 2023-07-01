import classNames from "classnames";

const SIZE = ["m", "l"] as const;

type Props = {
  className?: string;
  id?: string;
  max?: string;
  min?: string;
  step?: string;
  value?: number;
  size?: (typeof SIZE)[number];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const VuiNumberInput = ({ className, id, max, min, step, value, size = "m", onChange, ...rest }: Props) => {
  const classes = classNames("vuiInput", `vuiInput--${size}`, className);

  return (
    <input
      type="number"
      className={classes}
      id={id}
      max={max}
      min={min}
      step={step}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
