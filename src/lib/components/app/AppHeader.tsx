import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  growRight?: boolean;
};

export const VuiAppHeader = ({ left, right, growRight, ...rest }: Props) => {
  return (
    <div className="vuiAppHeader" {...rest}>
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