import { LabelOnly } from "./LabelOnly";
import { WithDescription } from "./WithDescription";

const LabelOnlySource = require("!!raw-loader!./LabelOnly");
const WithDescriptionSource = require("!!raw-loader!./WithDescription");

export const superRadioGroup = {
  name: "Super radio group",
  path: "/superRadioGroup",
  examples: [
    {
      component: <LabelOnly />,
      source: LabelOnlySource.default.toString()
    },
    {
      component: <WithDescription />,
      source: WithDescriptionSource.default.toString()
    }
  ]
};
