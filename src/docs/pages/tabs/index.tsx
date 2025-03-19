import { Small } from "./Small";
import { Medium } from "./Medium";
import { FullWidth } from "./FullWidth";
import { Links } from "./Links";
import { Enclosed } from "./Enclosed";

const SmallSource = require("!!raw-loader!./Small");
const MediumSource = require("!!raw-loader!./Medium");
const FullWidthSource = require("!!raw-loader!./FullWidth");
const LinksSource = require("!!raw-loader!./Links");
const EnclosedSource = require("!!raw-loader!./Enclosed");

export const tabs = {
  name: "Tabs",
  path: "/tabs",
  examples: [
    {
      name: "Small",
      component: <Small />,
      source: SmallSource.default.toString()
    },
    {
      name: "Medium",
      component: <Medium />,
      source: MediumSource.default.toString()
    },
    {
      name: "Full width",
      component: <FullWidth />,
      source: FullWidthSource.default.toString()
    },
    {
      name: "Links",
      component: <Links />,
      source: LinksSource.default.toString()
    },
    {
      name: "Enclosed",
      component: <Enclosed />,
      source: EnclosedSource.default.toString()
    }
  ]
};
