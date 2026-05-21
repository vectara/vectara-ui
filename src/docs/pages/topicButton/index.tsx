import { Link } from "./Link";
import { Color } from "./Color";

const LinkSource = require("!!raw-loader!./Link");
const ColorSource = require("!!raw-loader!./Color");

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
    }
  ]
};
