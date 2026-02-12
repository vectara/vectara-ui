import { VuiSuperCheckbox } from "./SuperCheckbox";
import { CheckboxConfig } from "./types";

type Props<T> = {
  group: CheckboxConfig<T>[];
  onChange: (value: string) => void;
};

export const VuiSuperCheckboxGroup = <T extends string>({ group, onChange }: Props<T>) => {
  return (
    <div className="vuiSuperCheckboxGroup">
      {group.map((item) => (
        <VuiSuperCheckbox key={item.value} {...item} onChange={onChange} />
      ))}
    </div>
  );
};
