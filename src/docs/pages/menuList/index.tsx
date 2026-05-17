import { MenuList } from "./MenuList";

const MenuListSource = require("!!raw-loader!./MenuList");

export const menuList = {
  name: "Menu List",
  path: "/menuList",
  examples: [
    {
      name: "Menu List",
      component: <MenuList />,
      source: MenuListSource.default.toString()
    }
  ]
};
