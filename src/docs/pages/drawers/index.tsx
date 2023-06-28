import { PrimaryDrawer } from "./PrimaryDrawer";
import { DangerDrawer } from "./DangerDrawer";

const PrimaryDrawerSource = require("!!raw-loader!./PrimaryDrawer");
const DangerDrawerSource = require("!!raw-loader!./DangerDrawer");

export const drawers = {
  name: "Drawers",
  path: "/drawers",
  examples: [
    {
      name: "Primary drawer",
      component: <PrimaryDrawer />,
      source: PrimaryDrawerSource.default.toString()
    },
    {
      name: "Danger drawer",
      component: <DangerDrawer />,
      source: DangerDrawerSource.default.toString()
    }
  ]
};
