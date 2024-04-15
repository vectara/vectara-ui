import { VuiStatList, VuiStatus } from "../../../lib";

export const StatList = () => {
  return (
    <VuiStatList
      stats={[
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
      ]}
    />
  );
};
