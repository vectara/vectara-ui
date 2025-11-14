import { InfoMenu } from "./InfoMenu";
const InfoMenuSource = require("!!raw-loader!./InfoMenu");

export const infoMenu = {
  name: "Info Menu",
  path: "/InfoMenu",
  example: {
    component: <InfoMenu />,
    source: InfoMenuSource.default.toString()
  }
};
