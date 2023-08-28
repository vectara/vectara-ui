import { Notifications } from "./Notifications";
const NotificationsSource = require("!!raw-loader!./Notifications");

export const notifications = {
  name: "Notifications",
  path: "/notifications",
  examples: [
    {
      component: <Notifications />,
      source: NotificationsSource.default.toString()
    }
  ]
};
