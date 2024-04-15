import { Languages } from "./Languages";
import { Scrolling } from "./Scrolling";
import { FullHeight } from "./FullHeight";

const LanguagesSource = require("!!raw-loader!./Languages");
const ScrollingSource = require("!!raw-loader!./Scrolling");
const FullHeightSource = require("!!raw-loader!./FullHeight");

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
    }
  ]
};
