import { Link } from "./Link";

const LinkSource = require("!!raw-loader!./Link");

export const topicButton = {
  name: "Topic Button",
  path: "/topicButton",
  examples: [
    {
      name: "Link",
      component: <Link />,
      source: LinkSource.default.toString()
    }
  ]
};
