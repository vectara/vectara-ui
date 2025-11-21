import classNames from "classnames";

type Props = {
  type?: "full" | "outlined";
  header?: React.ReactNode;
  body?: React.ReactNode;
  align?: "center" | "left" | "right";
  className?: string;
  interactive?: boolean;
  href?: string;
  padding?: "s" | "m" | "l";
  ungrouped?: boolean;
  fullHeight?: boolean;
  isScrollable?: boolean;
};

export const VuiCard = ({
  type = "outlined",
  header,
  body,
  align = "left",
  interactive,
  href,
  className,
  padding = "s",
  ungrouped,
  fullHeight,
  isScrollable,
  ...rest
}: Props) => {
  const classes = classNames(
    "vuiCard",
    `vuiCard--${type}`,
    `vuiCard--${align}`,
    `vuiCard--${padding}`,
    {
      "vuiCard--interactive": interactive && !href,
      "vuiCard--link": href,
      "vuiCard--ungrouped": ungrouped,
      "vuiCard--fullHeight": fullHeight
    },
    className
  );

  const bodyClasses = classNames("vuiCard__body", {
    "vuiCard__body--withHeader": header,
    "vuiCard__body--scrollable": isScrollable
  });

  const headerContent = header && <div className="vuiCard__header">{header}</div>;
  const bodyContent = body && <div className={bodyClasses}>{body}</div>;

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {headerContent}
        {bodyContent}
      </a>
    );
  }

  return (
    <div className={classes} {...rest}>
      {headerContent}
      {bodyContent}
    </div>
  );
};
