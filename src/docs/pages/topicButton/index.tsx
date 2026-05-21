import { Link } from "./Link";
import { Color } from "./Color";
import { Badges } from "./Badges";

const LinkSource = require("!!raw-loader!./Link");
const ColorSource = require("!!raw-loader!./Color");
const BadgesSource = require("!!raw-loader!./Badges");

export const topicButton = {
  name: "Topic Button",
  path: "/topicButton",
  examples: [
    {
      name: "Link",
      component: <Link />,
      source: LinkSource.default.toString()
    },
    {
      name: "Color",
      component: <Color />,
      source: ColorSource.default.toString()
    },
    {
      name: "Badges",
      component: <Badges />,
      source: BadgesSource.default.toString()
    }
  ]
};
