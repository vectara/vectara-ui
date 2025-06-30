import ReactDatePicker from "react-datepicker";
import { Props as PopoverProps, VuiPopover } from "../popover/Popover";
import { VuiTextInput } from "../form";
import { formatDate } from "../../utils";
import classNames from "classnames";

type BasicProps = {
  date?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  "data-testid"?: string;
};

type InlineProps = BasicProps & {
  isInline: true;
};

type InPopoverProps = BasicProps &
  Pick<PopoverProps, "isOpen" | "setIsOpen" | "anchorSide"> & {
    isInline?: false;
  };

type Props = InlineProps | InPopoverProps;

export const VuiDatePicker = ({ date, onChange, placeholder = "Select date", isInline = false, ...rest }: Props) => {
  const classes = classNames("vuiDatePicker", {
    "vuiDatePicker--inline": isInline
  });

  const datePicker = (
    <div className={classes} data-testid={rest["data-testid"]}>
      <ReactDatePicker selected={date} onChange={onChange} placeholderText={placeholder} inline todayButton="Today" />
    </div>
  );

  if (isInline) return datePicker;

  const { isOpen, setIsOpen, anchorSide } = rest as InPopoverProps;

  const input = <VuiTextInput value={date ? formatDate(date) : ""} />;

  return (
    <VuiPopover isOpen={isOpen} setIsOpen={setIsOpen} button={input} anchorSide={anchorSide}>
      {datePicker}
    </VuiPopover>
  );
};
