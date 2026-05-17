import classNames from "classnames";
import { VuiIcon } from "../icon/Icon";
import { useVuiContext } from "../context/Context";

type Props = {
  className?: string;
  children?: React.ReactNode;
  "data-testid"?: string;
  isActive?: boolean;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  append?: React.ReactNode;
  disabled?: boolean;
};

export const VuiMenuListButton = ({ className, isActive, onClick, href, icon, children, append, ...rest }: Props) => {
  const { createLink } = useVuiContext();

  const classes = classNames("vuiMenuListButton", className, {
    "vuiMenuListButton-isActive": isActive
  });

  const content = (
    <>
      {icon && <VuiIcon size="s">{icon}</VuiIcon>}
      {children && <span className="vuiMenuListButton__label">{children}</span>}
      {append}
    </>
  );

  let button;

  if (href && !rest.disabled) {
    button = createLink({
      href,
      onClick,
      children: (
        //* Wrap a button otherwise the flex layout breaks */}
        <button className={classes} tabIndex={-1}>
          {content}
        </button>
      ),
      ...rest
    });
  } else {
    button = (
      <button type="button" className={classes} onClick={() => onClick?.()} {...rest}>
        {content}
      </button>
    );
  }

  return button;
};
