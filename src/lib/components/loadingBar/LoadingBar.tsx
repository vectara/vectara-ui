import classNames from "classnames";

export const LOADING_BAR_COLOR = ["accent", "primary", "danger", "warning", "success", "neutral", "subdued"] as const;

type Props = {
  color?: (typeof LOADING_BAR_COLOR)[number];
  className?: string;
};

// An indeterminate activity indicator that anchors to the bottom edge of its
// nearest positioned ancestor. Useful for signaling background activity inside
// containers such as cards without disturbing their content.
export const VuiLoadingBar = ({ color = "primary", className, ...rest }: Props) => {
  const classes = classNames("vuiLoadingBar", `vuiLoadingBar--${color}`, className);
  return <div className={classes} role="progressbar" aria-label="Loading" {...rest} />;
};
