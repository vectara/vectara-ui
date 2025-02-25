import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  growRight?: boolean;
  className?: string;
};

export const VuiAppHeader = ({ left, right, growRight, className, ...rest }: Props) => {
  const classes = classNames("vuiAppHeader", className);

  return (
    <div className={classes} {...rest}>
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
    </div>
  );
};
