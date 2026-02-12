import { LabelOnly } from "./LabelOnly";
import { WithDescription } from "./WithDescription";

const LabelOnlySource = require("!!raw-loader!./LabelOnly");
const WithDescriptionSource = require("!!raw-loader!./WithDescription");

export const superCheckboxGroup = {
  name: "Super Checkbox Group",
  path: "/superCheckboxGroup",
  examples: [
    {
      name: "Label only",
      component: <LabelOnly />,
      source: LabelOnlySource.default.toString()
    },
    {
      name: "With description",
      component: <WithDescription />,
      source: WithDescriptionSource.default.toString()
    }
  ]
};
