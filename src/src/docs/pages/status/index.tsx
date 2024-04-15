import { Status } from "./Status";

const StatusSource = require("!!raw-loader!./Status");

export const status = {
  name: "Status",
  path: "/status",
  examples: [
    {
      name: "Status",
      component: <Status />,
      source: StatusSource.default.toString()
    }
  ]
};
