import { InProgress } from "./InProgress";

const InProgressSource = require("!!raw-loader!./InProgress");

export const inProgress = {
  name: "In Progress",
  path: "/inProgress",
  example: {
    component: <InProgress />,
    source: InProgressSource.default.toString()
  }
};
