import classNames from "classnames";

type Props = {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  align?: "top" | "bottom";
  color?: "transparent" | "default";
  background?: string;
  backgroundScale?: "width" | "height";
};

export const VuiPanel = ({
  icon,
  children,
  actions,
  background,
  backgroundScale = "height",
  align = "top",
  color = "default"
}: Props) => {
  const classes = classNames("vuiPanel", `vuiPanel--${color}`, `vuiPanel--align-${align}`);

  return (
    <div className={classes}>
      {background && <img className={`vuiPanelBackground vuiBackgroundScale--${backgroundScale}`} src={background} />}
      {icon && <div className="vuiPanelIcon">{icon}</div>}
      {children && <div className="vuiPanelContent">{children}</div>}
      {actions && <div className="vuiPanelActions">{actions}</div>}
    </div>
  );
};
