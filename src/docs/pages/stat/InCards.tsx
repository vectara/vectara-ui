import { VuiCard, VuiGrid, VuiStat } from "../../../lib";

export const InCards = () => {
  return (
    <VuiGrid columns={3} spacing="s">
      <VuiCard type="full" body={<VuiStat title="Latency" text="67ms" />} />
      <VuiCard type="full" body={<VuiStat title="Latency" text="67ms" />} />
      <VuiCard type="full" body={<VuiStat title="Latency" text="67ms" />} />
    </VuiGrid>
  );
};
