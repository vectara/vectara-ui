import { PrimaryDrawer } from "./PrimaryDrawer";
import { DangerDrawer } from "./DangerDrawer";

const PrimaryDrawerSource = require("!!raw-loader!./PrimaryDrawer");
const DangerDrawerSource = require("!!raw-loader!./DangerDrawer");

export const drawer = {
  name: "Drawer",
  path: "/drawer",
  examples: [
    {
      name: "Primary",
      component: <PrimaryDrawer />,
      source: PrimaryDrawerSource.default.toString()
    },
    {
      name: "Danger",
      component: <DangerDrawer />,
      source: DangerDrawerSource.default.toString()
    }
  ]
};
