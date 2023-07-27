import classNames from "classnames";

const SIZE = ["m", "l"] as const;

type Props = {
  className?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  size?: (typeof SIZE)[number];
  fullWidth?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const VuiTextInput = ({
  className,
  id,
  placeholder,
  value,
  size = "m",
  onChange,
  fullWidth,
  ...rest
}: Props) => {
  const classes = classNames(
    "vuiInput",
    "vuiInput--text",
    `vuiInput--${size}`,
    {
      "vuiInput--fullWidth": fullWidth
    },
    className
  );

  return (
    <input
      type="text"
      className={classes}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
