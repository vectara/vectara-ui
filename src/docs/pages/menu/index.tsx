import { Menu } from "./Menu";
import { NoTitle } from "./NoTitle";

const MenuSource = require("!!raw-loader!./Menu");
const NoTitleSource = require("!!raw-loader!./NoTitle");

export const menu = {
  name: "Menu",
  path: "/menu",
  examples: [
    {
      component: <Menu />,
      source: MenuSource.default.toString()
    },
    {
      component: <NoTitle />,
      source: NoTitleSource.default.toString()
    }
  ]
};
