import { VuiSpacer, VuiStatList, VuiStatus } from "../../../lib";

const stats = [
  {
    name: "Name of interstellar vessel",
    value: "Nostromo"
  },
  {
    name: "location_which_is_a_long_string_and_should_wrap",
    value: "drifting_around_somewhere_in_extremely_deep_space"
  },
  {
    name: "Status",
    align: "center" as const,
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
