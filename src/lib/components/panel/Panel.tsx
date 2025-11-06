import classNames from "classnames";

type Props = {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  align?: "top" | "bottom";
  color?: "transparent" | "default";
  background?: string;
  backgroundScale?: "width" | "height";
  backgroundMaxSize?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
};

export const VuiPanel = ({
  icon,
  children,
  actions,
  background,
  backgroundScale = "height",
  align = "top",
  color = "default",
  backgroundMaxSize,
  fullHeight,
  fullWidth,
  ...rest
}: Props) => {
  const classes = classNames("vuiPanel", `vuiPanel--${color}`, `vuiPanel--align-${align}`, {
    "vuiPanel--fullHeight": fullHeight,
    "vuiPanel--fullWidth": fullWidth
  });
  const style =
    backgroundMaxSize !== undefined
      ? {
          maxWidth: backgroundScale === "width" ? backgroundMaxSize : undefined,
          maxHeight: backgroundScale === "height" ? backgroundMaxSize : undefined
        }
      : {};

  return (
    <div className={classes} {...rest}>
      {background && (
        <img className={`vuiPanelBackground vuiBackgroundScale--${backgroundScale}`} src={background} style={style} />
      )}
      {icon && <div className="vuiPanelIcon">{icon}</div>}
      {children && <div className="vuiPanelContent">{children}</div>}
      {actions && <div className="vuiPanelActions">{actions}</div>}
    </div>
  );
};
