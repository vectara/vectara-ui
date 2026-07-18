import { ReactNode } from "react";
import classNames from "classnames";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiTitle } from "../typography/Title";
import { VuiText } from "../typography/Text";
import { CalloutColor } from "./types";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIconButton } from "../button/IconButton";
import { BiCheckCircle, BiError, BiHelpCircle, BiInfoCircle, BiShow, BiTestTube, BiX } from "react-icons/bi";
import { VuiIcon } from "../icon/Icon";

const HEADING_ELEMENT = ["h1", "h2", "h3", "h4", "h5", "h6", "p"] as const;

type Props = {
  children?: ReactNode;
  title: string;
  headingElement: (typeof HEADING_ELEMENT)[number];
  color: CalloutColor;
  onDismiss?: () => void;
};

const colorToIconMap = {
  accent: BiTestTube,
  primary: BiInfoCircle,
  danger: BiError,
  success: BiCheckCircle,
  warning: BiShow,
  neutral: BiHelpCircle
};

export const VuiCallout = ({ children, title, headingElement, color, onDismiss, ...rest }: Props) => {
  const classes = classNames("vuiCallout", `vuiCallout--${color}`);
  const HeadingElement = headingElement as keyof JSX.IntrinsicElements;

  const Icon = colorToIconMap[color];

  return (
    <div className={classes} {...rest}>
      <VuiFlexContainer alignItems="start" spacing="xs">
        <VuiFlexItem grow={0} shrink={0}>
          <VuiIcon color="neutral">
            <Icon />
          </VuiIcon>
        </VuiFlexItem>

        <VuiFlexItem grow={1} shrink={1}>
          <VuiFlexContainer alignItems="start" justifyContent="spaceBetween">
            <VuiFlexItem grow={1}>
              <VuiTitle size="xs">
                <HeadingElement>{title}</HeadingElement>
              </VuiTitle>
            </VuiFlexItem>

            {onDismiss && (
              <VuiFlexItem shrink={false} grow={false}>
                <VuiIconButton
                  aria-label="Hide information"
                  className="vuiCallout__closeButton"
                  data-testid="calloutCloseButton"
                  color={color}
                  onClick={onDismiss}
                  icon={
                    <VuiIcon>
                      <BiX />
                    </VuiIcon>
                  }
                  size="s"
                />
              </VuiFlexItem>
            )}
          </VuiFlexContainer>

          {children && (
            <>
              <VuiSpacer size="s" />
              <VuiText size="s">{children}</VuiText>
            </>
          )}
        </VuiFlexItem>
      </VuiFlexContainer>
    </div>
  );
};
