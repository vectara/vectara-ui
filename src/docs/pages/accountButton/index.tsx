import { AccountButton } from "./AccountButton";
const AccountButtonSource = require("!!raw-loader!./AccountButton");

export const accountButton = {
  name: "Account Button",
  path: "/accountButton",
  example: {
    component: <AccountButton />,
    source: AccountButtonSource.default.toString()
  }
};
