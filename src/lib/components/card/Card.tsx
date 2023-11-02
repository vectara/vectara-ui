import classNames from "classnames";

type Props = {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  align?: "center" | "left" | "right";
  className?: string;
  interactive?: boolean;
  href?: string;
  padding?: "s" | "m" | "l";
  highlight?: boolean;
  ungrouped?: boolean;
};

export const VuiCard = ({
  children,
  footer,
  align = "left",
  interactive,
  href,
  className,
  padding = "s",
  highlight,
  ungrouped,
  ...rest
}: Props) => {
  const classes = classNames(
    "vuiCard",
    `vuiCard--${align}`,
    `vuiCard--${padding}`,
    {
      "vuiCard--interactive": interactive && !href,
      "vuiCard--link": href,
      "vuiCard--highlight": highlight,
      "vuiCard--ungrouped": ungrouped
    },
    className
  );

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children && <div className="vuiCard__content">{children}</div>}
        {footer && <div className="vuiCard__footer">{footer}</div>}
      </a>
    );
  }

  return (
    <div className={classes} {...rest}>
      {children && <div className="vuiCard__content">{children}</div>}
      {footer && <div className="vuiCard__footer">{footer}</div>}
    </div>
  );
};
