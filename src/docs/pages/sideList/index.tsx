import { SideList } from "./SideList";

const SideListSource = require("!!raw-loader!./SideList");

export const sideList = {
  name: "Side List",
  path: "/sideList",
  examples: [
    {
      name: "Side List",
      component: <SideList />,
      source: SideListSource.default.toString()
    }
  ]
};
