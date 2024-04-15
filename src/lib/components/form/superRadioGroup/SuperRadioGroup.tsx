import { createId } from "../../../utils/createId";
import { VuiSuperRadioButton } from "./SuperRadioButton";
import { RadioButtonConfig } from "./types";

type Props<T> = {
  groupName?: string;
  group: RadioButtonConfig<T>[];
  onChange: (value: string) => void;
};

export const VuiSuperRadioGroup = <T extends string>({ groupName = createId(), group, onChange }: Props<T>) => {
  return (
    <div className="vuiSuperRadioGroup">
      {group.map((item) => (
        <VuiSuperRadioButton key={item.value} {...item} groupName={groupName} onChange={onChange} />
      ))}
    </div>
  );
};
