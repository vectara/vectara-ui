import classNames from "classnames";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiTextColor } from "../typography/TextColor";
import { VuiTitle } from "../typography/Title";
import { useVuiContext } from "../context/Context";
import { LinkProps } from "../link/types";
import { getTrackingProps } from "../../utils/getTrackingProps";
import { VuiBadge, BADGE_COLOR } from "../badge/Badge";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";

export const TOPIC_BUTTON_COLOR = ["primary", "accent"] as const;
export type TopicButtonColor = (typeof TOPIC_BUTTON_COLOR)[number];

export const TOPIC_BUTTON_STYLE = ["compactRow", "compactGrid"] as const;
export type TopicButtonStyle = (typeof TOPIC_BUTTON_STYLE)[number];

type TopicButtonBadge = {
  label: string;
  color: (typeof BADGE_COLOR)[number];
};

type Props = {
  children?: React.ReactNode;
  className?: string;
  href?: LinkProps["href"];
  target?: LinkProps["target"];
  track?: LinkProps["track"];
  onClick?: () => void;
  title?: string;
  fullWidth?: boolean;
  color?: TopicButtonColor;
  buttonStyle?: TopicButtonStyle;
  badges?: TopicButtonBadge[];
  icon?: React.ReactNode;
};

export const VuiTopicButton = ({
  children,
  className,
  href,
  onClick,
  title,
  fullWidth,
  color = "primary",
  buttonStyle,
  badges,
  icon,
  target,
  track,
  ...rest
}: Props) => {
  const { createLink } = useVuiContext();

  const classes = classNames("vuiTopicButton", `vuiTopicButton--${color}`, className, {
    [`vuiTopicButton--${buttonStyle}`]: buttonStyle,
    "vuiTopicButton--fullWidth": fullWidth
  });

  const titleNode = title && (
    <VuiTitle size={buttonStyle ? "xs" : "s"}>
      <p>
        <VuiTextColor color={color}>{title}</VuiTextColor>
      </p>
    </VuiTitle>
  );

  const badgeNodes = badges?.map((badge, index) => (
    <VuiFlexItem key={index} grow={false} shrink={false}>
      <VuiBadge color={badge.color} size="s">
        {badge.label}
      </VuiBadge>
    </VuiFlexItem>
  ));

  let content;

  if (buttonStyle === "compactRow") {
    // Single line: icon, title, divider + description, with badges pushed right.
    content = (
      <VuiFlexContainer justifyContent="spaceBetween" alignItems="center" spacing="s">
        <VuiFlexContainer alignItems="center" spacing="s">
          {icon && (
            <VuiFlexItem grow={false} shrink={false}>
              {icon}
            </VuiFlexItem>
          )}

          <VuiFlexItem grow={false} shrink={false}>
            {titleNode}
          </VuiFlexItem>

          <VuiFlexItem grow={true}>
            {children && (
              <VuiFlexContainer alignItems="center" spacing="s">
                <VuiFlexItem grow={false} shrink={false}>
                  <span className="vuiTopicButton__divider" aria-hidden="true" />
                </VuiFlexItem>

                <VuiFlexItem grow={false} shrink={false}>
                  {children}
                </VuiFlexItem>
              </VuiFlexContainer>
            )}
          </VuiFlexItem>
        </VuiFlexContainer>
        <VuiFlexItem>
          {badgeNodes && (
            <VuiFlexItem grow={false} shrink={false}>
              <VuiFlexContainer alignItems="center" spacing="xs">
                {badgeNodes}
              </VuiFlexContainer>
            </VuiFlexItem>
          )}
        </VuiFlexItem>
      </VuiFlexContainer>
    );
  } else if (buttonStyle === "compactGrid") {
    // Square icon tile beside a single-line title, with children stacked below.
    content = (
      <VuiFlexContainer alignItems="center" spacing="s">
        {icon && (
          <VuiFlexItem grow={false} shrink={false} className="vuiTopicButton__iconTile">
            {icon}
          </VuiFlexItem>
        )}

        <VuiFlexItem grow={true}>
          {titleNode}
          {children}
        </VuiFlexItem>
      </VuiFlexContainer>
    );
  } else {
    content = (
      <VuiFlexContainer alignItems="start" spacing="m">
        <VuiFlexItem grow={true}>
          {title && (
            <>
              <VuiFlexContainer alignItems="center" spacing="s">
                {icon && icon}
                <VuiFlexItem grow={false} shrink={false}>
                  {titleNode}
                </VuiFlexItem>

                {badgeNodes}
              </VuiFlexContainer>

              {children && <VuiSpacer size="xxs" />}
            </>
          )}

          {children}
        </VuiFlexItem>
      </VuiFlexContainer>
    );
  }

  if (href) {
    return createLink({
      className: classes,
      href,
      onClick,
      children: content,
      target,
      ...rest,
      ...getTrackingProps(track)
    });
  }

  return (
    <button className={classes} onClick={onClick} type="button" {...rest}>
      {content}
    </button>
  );
};
