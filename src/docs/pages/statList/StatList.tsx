import { VuiSpacer, VuiStatList, VuiStatus } from "../../../lib";

const stats = [
  {
    name: "Name",
    value: "Nostromo"
  },
  {
    name: "Location",
    value: "Deep space"
  },
  {
    name: "Status",
    value: <VuiStatus status="error" label="Infested" />
  }
];

export const StatList = () => {
  return (
    <>
      <VuiStatList stats={stats} />

      <VuiSpacer size="l" />

      <VuiStatList stats={stats} size="xs" />
    </>
  );
};
