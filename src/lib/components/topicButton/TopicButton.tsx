import classNames from "classnames";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiTextColor } from "../typography/TextColor";
import { VuiTitle } from "../typography/Title";
import { useVuiContext } from "../context/Context";
import { LinkProps } from "../link/types";
import { getTrackingProps } from "../../utils/getTrackingProps";

export const TOPIC_BUTTON_COLOR = ["primary", "accent"] as const;
export type TopicButtonColor = (typeof TOPIC_BUTTON_COLOR)[number];

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
};

export const VuiTopicButton = ({
  children,
  className,
  href,
  onClick,
  title,
  fullWidth,
  color = "primary",
  target,
  track,
  ...rest
}: Props) => {
  const { createLink } = useVuiContext();

  const classes = classNames("vuiTopicButton", `vuiTopicButton--${color}`, className, {
    "vuiTopicButton--fullWidth": fullWidth
  });

  const content = (
    <>
      {title && (
        <>
          <VuiTitle size="s">
            <p>
              <VuiTextColor color={color}>{title}</VuiTextColor>
            </p>
          </VuiTitle>

          {children && <VuiSpacer size="xxs" />}
        </>
      )}

      {children}
    </>
  );

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
