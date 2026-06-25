import { VuiSpacer, VuiStatus, VuiTitle } from "../../../lib";

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

      <VuiSpacer size="l" />

      <div style={{ width: "300px" }}>
        <VuiTitle size="s">
          <h3>Multiline message</h3>
        </VuiTitle>

        <VuiSpacer size="m" />

        <VuiStatus
          status="error"
          label="A multiline error message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat sem, ut mattis sapien."
          gap="l"
        />

        <VuiSpacer size="m" />

        <VuiStatus
          status="warning"
          label="A multiline warning message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat sem, ut mattis sapien."
          gap="l"
        />

        <VuiSpacer size="m" />

        <VuiStatus
          status="success"
          label="A multiline success message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat sem, ut mattis sapien."
          gap="l"
        />

        <VuiSpacer size="m" />

        <VuiStatus
          status="info"
          label="A multiline info message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat sem, ut mattis sapien."
          gap="l"
        />
      </div>
    </>
  );
};
