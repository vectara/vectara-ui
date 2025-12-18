import { VuiFlexContainer, VuiInfoListItem } from "../../../lib";

export const HorizontalList = () => {
  return (
    <VuiFlexContainer direction="row" spacing="l">
      <VuiInfoListItem title="Email" value="email@email.com" />
      <VuiInfoListItem title="Account number" value="1234567890" />
      <VuiInfoListItem title="Account size" value="22 MB" />
    </VuiFlexContainer>
  );
};
