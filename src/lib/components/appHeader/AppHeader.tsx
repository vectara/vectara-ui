import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export const VuiAppHeader = ({ left, right }: Props) => {
  return (
    <div className="vuiAppHeader">
      <VuiFlexContainer justifyContent="spaceBetween" alignItems="center">
        {Boolean(left) && <VuiFlexItem grow={1}>{left}</VuiFlexItem>}

        {Boolean(right) && <VuiFlexItem grow={false}>{right}</VuiFlexItem>}
      </VuiFlexContainer>
    </div>
  );
};
