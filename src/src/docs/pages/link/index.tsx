import { Link } from "./Link";
import { Internal } from "./Internal";

const LinkSource = require("!!raw-loader!./Link");
const InternalSource = require("!!raw-loader!./Internal");

export const link = {
  name: "Link",
  path: "/link",
  examples: [
    {
      name: "With onClick and href",
      component: <Link />,
      source: LinkSource.default.toString()
    },
    {
      name: "Internal links",
      component: <Internal />,
      source: InternalSource.default.toString()
    }
  ]
};
