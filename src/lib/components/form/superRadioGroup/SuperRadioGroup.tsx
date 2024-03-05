import { createId } from "../../../utils/createId";
import { VuiSuperRadioButton } from "./SuperRadioButton";
import { RadioButtonConfig } from "./types";

type Props = {
  groupName?: string;
  group: RadioButtonConfig[];
  onChange: (value: string) => void;
};

export const VuiSuperRadioGroup = ({ groupName = createId(), group, onChange }: Props) => {
  return (
    <div className="vuiSuperRadioGroup">
      {group.map((item) => (
        <VuiSuperRadioButton key={item.value} {...item} groupName={groupName} onChange={onChange} />
      ))}
    </div>
  );
};
