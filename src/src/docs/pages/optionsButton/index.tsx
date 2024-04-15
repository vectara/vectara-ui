import { Primary } from "./Primary";
import { Secondary } from "./Secondary";

const PrimarySource = require("!!raw-loader!./Primary");
const SecondarySource = require("!!raw-loader!./Secondary");

export const optionsButton = {
  name: "Options Button",
  path: "/optionsButton",
  examples: [
    {
      name: "Primary type",
      component: <Primary />,
      source: PrimarySource.default.toString()
    },
    {
      name: "Secondary type",
      component: <Secondary />,
      source: SecondarySource.default.toString()
    }
  ]
};
