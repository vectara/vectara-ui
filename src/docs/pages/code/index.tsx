import { Languages } from "./Languages";
import { Scrolling } from "./Scrolling";
import { FullHeight } from "./FullHeight";
import { DisabledFeatures } from "./DisabledFeatures";

const LanguagesSource = require("!!raw-loader!./Languages");
const ScrollingSource = require("!!raw-loader!./Scrolling");
const FullHeightSource = require("!!raw-loader!./FullHeight");
const DisabledFeaturesSource = require("!!raw-loader!./DisabledFeatures");

export const code = {
  name: "Code",
  path: "/code",
  examples: [
    {
      name: "Supported Languages",
      component: <Languages />,
      source: LanguagesSource.default.toString()
    },
    {
      name: "Scrolling",
      component: <Scrolling />,
      source: ScrollingSource.default.toString()
    },
    {
      name: "Full height",
      component: <FullHeight />,
      source: FullHeightSource.default.toString()
    },
    {
      name: "Toggle features",
      component: <DisabledFeatures />,
      source: DisabledFeaturesSource.default.toString()
    }
  ]
};