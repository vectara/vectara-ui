import classNames from "classnames";

export const PATCH_COLOR = [
  "primary",
  "accent",
  "success",
  "warning",
  "danger",
  "red",
  "orange",
  "amber",
  "lime",
  "emerald",
  "teal",
  "sky",
  "indigo",
  "purple",
  "fuchsia",
  "pink",
  "slate"
] as const;

export type PatchColor = (typeof PATCH_COLOR)[number];

type Props = {
  color: PatchColor;
  size?: "xs" | "s" | "m";
  children?: React.ReactNode;
  "data-testid"?: string;
};

export const VuiPatch = ({ color, size = "xs", children, ...rest }: Props) => {
  const classes = classNames("vuiPatch", `vuiPatch--${color}`, `vuiPatch--${size}`);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
