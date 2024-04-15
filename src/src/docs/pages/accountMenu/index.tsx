import { AccountMenu } from "./AccountMenu";
const AccountMenuSource = require("!!raw-loader!./AccountMenu");

export const accountMenu = {
  name: "Account Menu",
  path: "/accountMenu",
  examples: [
    {
      component: <AccountMenu />,
      source: AccountMenuSource.default.toString()
    }
  ]
};
