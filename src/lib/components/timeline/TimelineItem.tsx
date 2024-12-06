import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";

type Props = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

export const VuiTimelineItem = ({ icon, children }: Props) => {
  return (
    <VuiFlexContainer alignItems="start" spacing="m" className="vuiTimelineItem">
      <VuiFlexItem className="vuiTimelineItem__icon" grow={false}>
        {icon}
      </VuiFlexItem>

      <VuiFlexItem className="vuiTimelineItem__content" grow={true}>
        {children}
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
