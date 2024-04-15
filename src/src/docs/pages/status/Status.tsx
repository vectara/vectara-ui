import { VuiSpacer, VuiStatus } from "../../../lib";

export const Status = () => {
  return (
    <>
      <VuiStatus status="error" label="Error" />

      <VuiSpacer size="m" />

      <VuiStatus status="warning" label="Warning" />

      <VuiSpacer size="m" />

      <VuiStatus status="success" label="Success" />

      <VuiSpacer size="m" />

      <VuiStatus status="info" label="Info" />

      <VuiSpacer size="m" />
    </>
  );
};
