import { Validation } from "./Validation";
const ValidationSource = require("!!raw-loader!./Validation");

export const validation = {
  name: "Validation",
  path: "/validation",
  example: {
    component: <Validation />,
    source: ValidationSource.default.toString()
  }
};
