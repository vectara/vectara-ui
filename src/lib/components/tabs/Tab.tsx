import classNames from "classnames";
import { useVuiContext } from "../context/Context";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
};

export const VuiTab = ({ children, className, href, onClick, isActive = false, ...rest }: Props) => {
  const { createLink } = useVuiContext();

  const classes = classNames(className, "vuiTab", {
    "vuiTab-isActive": isActive
  });

  const content = <div className="vuiTab__inner">{children}</div>;

  if (href) {
    return createLink({
      className: classes,
      href,
      onClick,
      children: content,
      ...rest
    });
  }

  return (
    <button className={classes} onClick={onClick} type="button" {...rest}>
      {content}
    </button>
  );
};
