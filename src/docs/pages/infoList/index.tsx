import { InfoList } from "./InfoList";
import { HorizontalList } from "./HorizontalList";

const InfoListSource = require("!!raw-loader!./InfoList");
const HorizontalListSource = require("!!raw-loader!./HorizontalList");

export const infoList = {
  name: "Info List",
  path: "/InfoList",
  examples: [
    {
      name: "Vertical",
      component: <InfoList />,
      source: InfoListSource.default.toString()
    },
    {
      name: "Horizontal",
      component: <HorizontalList />,
      source: HorizontalListSource.default.toString()
    }
  ]
};
