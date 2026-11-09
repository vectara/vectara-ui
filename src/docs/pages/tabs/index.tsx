import { Small } from "./Small";
import { Medium } from "./Medium";
import { FullWidth } from "./FullWidth";
import { Links } from "./Links";
import { Enclosed } from "./Enclosed";
import { Groups } from "./Groups";
import { TabsNavigator } from "./TabsNavigator";
import { Collapsing } from "./Collapsing";

const SmallSource = require("!!raw-loader!./Small");
const MediumSource = require("!!raw-loader!./Medium");
const FullWidthSource = require("!!raw-loader!./FullWidth");
const LinksSource = require("!!raw-loader!./Links");
const EnclosedSource = require("!!raw-loader!./Enclosed");
const GroupsSource = require("!!raw-loader!./Groups");
const TabsNavigatorSource =require("!!raw-loader!./TabsNavigator");
const CollapsingSource = require("!!raw-loader!./Collapsing");

export const tabs = {
  name: "Tabs",
  path: "/tabs",
  examples: [
    {
      name: "Tabs Navigator",
      component: <TabsNavigator />,
      source: TabsNavigatorSource.default.toString()
    },
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
    },
    {
      name: "Groups",
      component: <Groups />,
      source: GroupsSource.default.toString()
    },
    {
      name: "Collapsing into a tabs navigator",
      component: <Collapsing />,
      source: CollapsingSource.default.toString()
    }
  ]
};
