import { FormGroup } from "./FormGroup";
import { NonFormElement } from "./NonFormElement";
import { NoLabel } from "./NoLabel";
import { Size } from "./Size";
import { LabelRightContent } from "./LabelRightContent";

const FormGroupSource = require("!!raw-loader!./FormGroup");
const NonFormElementSource = require("!!raw-loader!./NonFormElement");
const NoLabelSource = require("!!raw-loader!./NoLabel");
const SizeSource = require("!!raw-loader!./Size");
const LabelRightContentSource = require("!!raw-loader!./LabelRightContent");

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
      name: "Without label",
      component: <NoLabel />,
      source: NoLabelSource.default.toString()
    },
    {
      name: "Label size",
      component: <Size />,
      source: SizeSource.default.toString()
    },
    {
      name: "With label right aligned content",
      component: <LabelRightContent />,
      source: LabelRightContentSource.default.toString()
    }
  ]
};
