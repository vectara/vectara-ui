import { TruncateString } from "./TruncateString";
const TruncateStringSource = require("!!raw-loader!./TruncateString");

export const truncate = {
  name: "Truncate string",
  path: "/truncate",
  examples: [
    {
      component: <TruncateString />,
      source: TruncateStringSource.default.toString()
    }
  ]
};
