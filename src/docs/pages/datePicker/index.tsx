import { DatePicker } from "./DatePicker";
import { Inline } from "./Inline";
import { DateRangePicker } from "./DateRangePicker";
import { DateRangePickerCustomInput } from "./DateRangePickerCustomInput";
import { WithTimeSelection } from "./WithTimeSelection";

const DatePickerSource = require("!!raw-loader!./DatePicker");
const InlineSource = require("!!raw-loader!./Inline");
const DateRangePickerSource = require("!!raw-loader!./DateRangePicker");
const DateRangePickerCustomInputSource = require("!!raw-loader!./DateRangePickerCustomInput");
const WithTimeSelectionSource = require("!!raw-loader!./WithTimeSelection");

export const datePicker = {
  name: "Date Picker",
  path: "/datePicker",
  examples: [
    {
      name: "In popover",
      component: <DatePicker />,
      source: DatePickerSource.default.toString()
    },
    {
      name: "Inline",
      component: <Inline />,
      source: InlineSource.default.toString()
    },
    {
      name: "Date range",
      component: <DateRangePicker />,
      source: DateRangePickerSource.default.toString()
    },
    {
      name: "Date range with custom input",
      component: <DateRangePickerCustomInput />,
      source: DateRangePickerCustomInputSource.default.toString()
    },
    {
      name: "With time selection",
      component: <WithTimeSelection />,
      source: WithTimeSelectionSource.default.toString()
    }
  ]
};
