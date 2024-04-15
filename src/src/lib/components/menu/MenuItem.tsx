import classNames from "classnames";
import { VuiSpacer } from "../spacer/Spacer";
import { LinkProps } from "../link/types";
import { useVuiContext } from "../context/Context";

export type MenuItem = {
  className?: string;
  title?: React.ReactNode;
  text?: React.ReactNode;
  onClick?: () => void;
  href?: LinkProps["href"];
  color?: "neutral" | "primary" | "danger";
};

export const VuiMenuItem = ({ className, title, text, onClick, href, color = "neutral", ...rest }: MenuItem) => {
  const { createLink } = useVuiContext();
  const classes = classNames(className, "vuiMenuItem", `vuiMenuItem--${color}`, {
    "vuiMenuItem--clickable": onClick || href
  });

  const props = {
    className: classes,
    onClick,
    ...rest
  };

  const content = (
    <>
      {title && <div className="vuiMenuItem__title">{title}</div>}
      {text && title && <VuiSpacer size="xxs" />}
      {text && <div className="vuiMenuItem__text">{text}</div>}
    </>
  );

  if (href) {
    return createLink({
      href,
      ...props,
      children: content
    });
  }

  if (onClick) {
    return <button {...props}>{content}</button>;
  }

  return <div {...props}>{content}</div>;
};
