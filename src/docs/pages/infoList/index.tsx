import { InfoList } from "./InfoList";
const InfoListSource = require("!!raw-loader!./InfoList");

export const infoList = {
  name: "Info List",
  path: "/InfoList",
  examples: [
    {
      component: <InfoList />,
      source: InfoListSource.default.toString()
    }
  ]
};
