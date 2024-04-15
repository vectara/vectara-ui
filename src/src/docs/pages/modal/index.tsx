import { PrimaryModal } from "./PrimaryModal";
import { DangerModal } from "./DangerModal";

const PrimaryModalSource = require("!!raw-loader!./PrimaryModal");
const DangerModalSource = require("!!raw-loader!./DangerModal");

export const modal = {
  name: "Modal",
  path: "/modal",
  examples: [
    {
      name: "Primary",
      component: <PrimaryModal />,
      source: PrimaryModalSource.default.toString()
    },
    {
      name: "Danger",
      component: <DangerModal />,
      source: DangerModalSource.default.toString()
    }
  ]
};
