import classNames from "classnames";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIcon } from "../icon/Icon";
import { createId } from "../../utils/createId";

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
  isExpanded?: boolean;
  onToggleExpansion?: () => void;
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
  isExpanded,
  onToggleExpansion,
  ...rest
}: Props) => {
  const isExpandable = Boolean(onToggleExpansion);
  const buttonId = createId();
  const bodyId = createId();

  const classes = classNames(
    "vuiCard",
    // for now, we only support outlined cards for expandable cards
    `vuiCard--${isExpandable ? "outlined" : type}`,
    `vuiCard--${align}`,
    `vuiCard--${padding}`,
    {
      "vuiCard--interactive": interactive && !href && !isExpandable,
      "vuiCard--link": href,
      "vuiCard--ungrouped": ungrouped,
      "vuiCard--fullHeight": fullHeight,
      "vuiCard--expandable": isExpandable
    },
    className
  );

  const bodyClasses = classNames("vuiCard__body", {
    "vuiCard__body--withHeader": header,
    "vuiCard__body--scrollable": isScrollable
  });

  if (isExpandable) {
    return (
      <div className={classes} {...rest}>
        {header && (
          <button
            className="vuiCard__expandableButton"
            onClick={onToggleExpansion}
            data-testid="cardToggleExpansionButton"
            id={buttonId}
            aria-controls={bodyId}
            aria-expanded={isExpanded}
            type="button"
          >
            <VuiFlexContainer alignItems="center" justifyContent="start" spacing="xs">
              <VuiIcon size="m" color="neutral" className="vuiCard__expandableIcon">
                {isExpanded ? <BiChevronDown /> : <BiChevronRight />}
              </VuiIcon>
              <VuiFlexItem className="vuiCard__expandableHeader" grow={1}>
                {header}
              </VuiFlexItem>
            </VuiFlexContainer>
          </button>
        )}
        {isExpanded && body && (
          <div className={bodyClasses} id={bodyId} aria-labelledby={buttonId}>
            {body}
          </div>
        )}
      </div>
    );
  }

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
