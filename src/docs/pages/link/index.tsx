import { Link } from "./Link";
const LinkSource = require("!!raw-loader!./Link");

export const link = {
  name: "Link",
  path: "/link",
  examples: [
    {
      component: <Link />,
      source: LinkSource.default.toString()
    }
  ]
};
