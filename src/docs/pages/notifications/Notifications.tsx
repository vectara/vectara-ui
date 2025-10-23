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
      hasCopyButton: true,
      children: <VuiButtonPrimary color="danger">Vent atmosphere</VuiButtonPrimary>
    },
    {
      color: "danger",
      message: "API request failed with error:",
      code: {
        content: `fetch('/api/data')
  .then(response => response.json())
  .catch(error => console.error(error))`,
        language: "js"
      },
      hasCopyButton: true
    },
    {
      color: "primary",
      message: "Check out our documentation for more information",
      link: {
        children: "View Documentation",
        href: "#"
      }
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
