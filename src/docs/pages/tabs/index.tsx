import { Tabs } from "./Tabs";
const TabsSource = require("!!raw-loader!./Tabs");

export const tabs = {
  name: "Tabs",
  path: "/tabs",
  examples: [
    {
      component: <Tabs />,
      source: TabsSource.default.toString()
    }
  ]
};
