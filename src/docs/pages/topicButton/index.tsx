import { Link } from "./Link";
import { Color } from "./Color";
import { CompactRow } from "./CompactRow";
import { CompactGrid } from "./CompactGrid";

const LinkSource = require("!!raw-loader!./Link");
const ColorSource = require("!!raw-loader!./Color");
const CompactRowSource = require("!!raw-loader!./CompactRow");
const CompactGridSource = require("!!raw-loader!./CompactGrid");

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
      name: "Compact row",
      component: <CompactRow />,
      source: CompactRowSource.default.toString()
    },
    {
      name: "Compact grid",
      component: <CompactGrid />,
      source: CompactGridSource.default.toString()
    }
  ]
};
