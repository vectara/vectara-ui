import { useState } from "react";
import { VuiButtonSecondary, VuiNotifications, Notification } from "../../../lib";

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
      message: "Not good. Very bad. Potentially catastrophic. You should probably do something about this."
    }
  ] as const;

  return NOTIFICATIONS[Math.floor(Math.random() * NOTIFICATIONS.length)];
};

export const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const dismissNotifications = () => {
    setNotifications([]);
  };

  const addNotification = (notification: Notification) => {
    setNotifications((prev) => [...prev, notification]);
  };

  const removeNotification = (notification: Notification) => {
    setNotifications((prev) => {
      const index = prev.findIndex((n) => n === notification);
      if (index === -1) return prev;
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  return (
    <>
      <VuiButtonSecondary color="primary" onClick={() => addNotification(getNotification())}>
        Add notification
      </VuiButtonSecondary>

      <VuiNotifications
        notifications={notifications}
        onShowAll={() => console.log("Show all")}
        onDismiss={(notification) => removeNotification(notification)}
        onDismissAll={() => dismissNotifications()}
        onClose={() => dismissNotifications()}
      />
    </>
  );
};
