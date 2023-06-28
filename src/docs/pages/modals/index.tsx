import { PrimaryModal } from "./PrimaryModal";
import { DangerModal } from "./DangerModal";

const PrimaryModalSource = require("!!raw-loader!./PrimaryModal");
const DangerModalSource = require("!!raw-loader!./DangerModal");

export const modals = {
  name: "Modals",
  path: "/modals",
  examples: [
    {
      name: "Primary modal",
      component: <PrimaryModal />,
      source: PrimaryModalSource.default.toString()
    },
    {
      name: "Danger modal",
      component: <DangerModal />,
      source: DangerModalSource.default.toString()
    }
  ]
};
