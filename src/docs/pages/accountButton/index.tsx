import { AccountButton } from "./AccountButton";
const AccountButtonSource = require("!!raw-loader!./AccountButton");

export const accountButton = {
  name: "Account Button",
  path: "/accountButton",
  examples: [
    {
      component: <AccountButton />,
      source: AccountButtonSource.default.toString()
    }
  ]
};
