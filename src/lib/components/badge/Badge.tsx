import { MouseEvent } from "react";
import classNames from "classnames";
import { BiX } from "react-icons/bi";
import { getTrackingProps } from "../../utils/getTrackingProps";
import { useVuiContext } from "../context/Context";
import { LinkProps } from "../link/types";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";

export const BADGE_COLOR = ["accent", "primary", "danger", "warning", "success", "neutral"] as const;

type Props = {
  children: React.ReactNode;
  className?: string;
  color: (typeof BADGE_COLOR)[number];
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onClose?: () => void;
  href?: LinkProps["href"];
  target?: LinkProps["target"];
  track?: LinkProps["track"];
};

export const VuiBadge = ({ children, className, color, onClick, onClose, href, target, track, ...rest }: Props) => {
  const { createLink } = useVuiContext();

  const classes = classNames(className, "vuiBadge", `vuiBadge--${color}`, {
    "vuiBadge--clickable": onClick ?? href
  });

  const content = onClose ? (
    <VuiFlexContainer alignItems="center" spacing="xxs">
      <VuiFlexItem>{children}</VuiFlexItem>
      <VuiFlexItem>
        <VuiIconButton
          aria-label="Remove"
          size="xs"
          color="subdued"
          className="vuiBadge__closeButton"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          icon={
            <VuiIcon size="s">
              <BiX />
            </VuiIcon>
          }
        />
      </VuiFlexItem>
    </VuiFlexContainer>
  ) : (
    children
  );

  if (onClick) {
    return (
      <button className={classes} onClick={onClick} {...rest}>
        {content}
      </button>
    );
  }

  if (href) {
    return createLink({
      className: classes,
      href,
      onClick,
      children: content,
      target,
      ...getTrackingProps(track)
    });
  }

  return (
    <div className={classes} {...rest}>
      {content}
    </div>
  );
};
