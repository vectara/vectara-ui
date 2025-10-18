import { FormGroup } from "./FormGroup";
import { NonFormElement } from "./NonFormElement";
import { Size } from "./Size";

const FormGroupSource = require("!!raw-loader!./FormGroup");
const NonFormElementSource = require("!!raw-loader!./NonFormElement");
const SizeSource = require("!!raw-loader!./Size");

export const formGroup = {
  name: "Form Group",
  path: "/formGroup",
  examples: [
    {
      name: "Form elements",
      component: <FormGroup />,
      source: FormGroupSource.default.toString()
    },
    {
      name: "Non-form elements",
      component: <NonFormElement />,
      source: NonFormElementSource.default.toString()
    },
    {
      name: "Label size",
      component: <Size />,
      source: SizeSource.default.toString()
    }
  ]
};
