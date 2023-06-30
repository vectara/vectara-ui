import { FormGroup } from "./FormGroup";
const FormGroupSource = require("!!raw-loader!./FormGroup");

export const formGroup = {
  name: "Form Group",
  path: "/formGroup",
  examples: [
    {
      component: <FormGroup />,
      source: FormGroupSource.default.toString()
    }
  ]
};
