import { Menu } from "./Menu";
import { NoBorder } from "./NoBorder";
import { NoTitle } from "./NoTitle";

const MenuSource = require("!!raw-loader!./Menu");
const NoBorderSource = require("!!raw-loader!./NoBorder");
const NoTitleSource = require("!!raw-loader!./NoTitle");

export const menu = {
  name: "Menu",
  path: "/menu",
  examples: [
    {
      name: "With titles",
      component: <Menu />,
      source: MenuSource.default.toString()
    },
    {
      name: "NoBorder",
      component: <NoBorder />,
      source: NoBorderSource.default.toString()
    },
    {
      name: "Without titles",
      component: <NoTitle />,
      source: NoTitleSource.default.toString()
    }
  ]
};
