import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";

type SidedProps = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  growRight?: boolean;
  content?: never;
};

// Use the content prop to override the content directly for more flexibility. Supplying the content directly will override the left/right props.
type ContentProps = {
  content: React.ReactNode;
  left?: never;
  right?: never;
  growRight?: never;
};

type Props = (SidedProps | ContentProps) & {
  className?: string;
  darkTheme?: boolean;
};

export const VuiAppHeader = ({ left, right, content, growRight, className, darkTheme, ...rest }: Props) => {
  const classes = classNames("vuiAppHeader", className, {
    vuiThemeDark: darkTheme
  });

  return (
    <div className={classes} {...rest}>
      {content ? (
        content
      ) : (
        <VuiFlexContainer className="vuiAppHeader__inner" justifyContent="spaceBetween" alignItems="center">
          {Boolean(left) && (
            <VuiFlexItem grow={false} shrink={false}>
              {left}
            </VuiFlexItem>
          )}

          {Boolean(right) && (
            <VuiFlexItem grow={growRight ? 1 : false} shrink={false}>
              {right}
            </VuiFlexItem>
          )}
        </VuiFlexContainer>
      )}
    </div>
  );
};
