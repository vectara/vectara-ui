import { addNotification, VuiButtonPrimary, VuiButtonSecondary, VuiNotifications } from "../../../lib";

const getNotification = () => {
  const NOTIFICATIONS = [
    {
      color: "primary",
      message: "Just some information, FYI"
    },
    {
      color: "success",
      message: "Something successfully succeeded, and it's important that you know about it"
    },
    {
      color: "warning",
      message: "Not so sure about this one. Could be bad?"
    },
    {
      color: "danger",
      message: "Not good. Very bad. Potentially catastrophic. You should probably do something about this.",
      children: <VuiButtonPrimary color="danger">Vent atmosphere</VuiButtonPrimary>
    }
  ] as const;

  return NOTIFICATIONS[Math.floor(Math.random() * NOTIFICATIONS.length)];
};

export const Notifications = () => {
  return (
    <>
      <VuiButtonSecondary
        color="primary"
        onClick={() => {
          addNotification(getNotification());
        }}
      >
        Add notification
      </VuiButtonSecondary>

      <VuiNotifications />
    </>
  );
};
