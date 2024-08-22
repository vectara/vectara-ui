import { InfoMenu } from "./InfoMenu";
const InfoMenuSource = require("!!raw-loader!./InfoMenu");

export const infoMenu = {
  name: "Info Menu",
  path: "/InfoMenu",
  examples: [
    {
      component: <InfoMenu />,
      source: InfoMenuSource.default.toString()
    }
  ]
};
