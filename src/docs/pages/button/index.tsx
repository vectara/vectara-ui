import { Sizes } from "./Sizes";
import { Colors } from "./Colors";
import { Icons } from "./Icons";
import { IconButton } from "./IconButton";
import { Link } from "./Link";
import { Pressed } from "./Pressed";

const ColorsSource = require("!!raw-loader!./Colors");
const SizesSource = require("!!raw-loader!./Sizes");
const IconsSource = require("!!raw-loader!./Icons");
const IconButtonSource = require("!!raw-loader!./IconButton");
const LinkSource = require("!!raw-loader!./Link");
const PressedSource = require("!!raw-loader!./Pressed");

export const button = {
  name: "Button",
  path: "/button",
  examples: [
    {
      name: "Colors",
      component: <Colors />,
      source: ColorsSource.default.toString()
    },
    {
      name: "Sizes",
      component: <Sizes />,
      source: SizesSource.default.toString()
    },
    {
      name: "Icons",
      component: <Icons />,
      source: IconsSource.default.toString()
    },
    {
      name: "IconButton",
      component: <IconButton />,
      source: IconButtonSource.default.toString()
    },
    {
      name: "Link",
      component: <Link />,
      source: LinkSource.default.toString()
    },
    {
      name: "Pressed state",
      component: <Pressed />,
      source: PressedSource.default.toString()
    }
  ]
};
