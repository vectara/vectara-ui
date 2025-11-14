import { InfoList } from "./InfoList";
const InfoListSource = require("!!raw-loader!./InfoList");

export const infoList = {
  name: "Info List",
  path: "/InfoList",
  example: {
    component: <InfoList />,
    source: InfoListSource.default.toString()
  }
};
