import { MouseEvent } from "react";
import classNames from "classnames";
import { BiCheck, BiX } from "react-icons/bi";
import { getTrackingProps } from "../../utils/getTrackingProps";
import { useVuiContext } from "../context/Context";
import { LinkProps } from "../link/types";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { createId } from "../../utils/createId";

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
  isSelected?: boolean;
};

export const VuiBadge = ({
  children,
  className,
  color,
  onClick,
  onClose,
  href,
  target,
  track,
  isSelected,
  ...rest
}: Props) => {
  const { createLink } = useVuiContext();
  const id = onClose ? createId() : undefined;

  const classes = classNames(className, "vuiBadge", `vuiBadge--${color}`, {
    "vuiBadge--clickable": onClick ?? href
  });

  const content = (
    <VuiFlexContainer alignItems="center" spacing="xxs">
      {isSelected && (
        <VuiFlexItem>
          <VuiIcon size="xs" color="inherit" className="vuiBadge__icon">
            <BiCheck />
          </VuiIcon>
        </VuiFlexItem>
      )}

      <VuiFlexItem id={id}>
        <div className="vuiBadge__content">{children}</div>
      </VuiFlexItem>

      {onClose && (
        <VuiFlexItem>
          <VuiIconButton
            aria-label="Remove"
            aria-describedby={id}
            size="xs"
            color="subdued"
            className="vuiBadge__icon"
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
            icon={
              <VuiIcon size="xs">
                <BiX />
              </VuiIcon>
            }
          />
        </VuiFlexItem>
      )}
    </VuiFlexContainer>
  );

  if (onClick) {
    return (
      <button className={classes} onClick={onClick} type="button" {...rest}>
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
