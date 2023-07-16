import { useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { VuiOptionsList } from "../optionsList/OptionsList";
import { VuiPopover } from "../popover/Popover";
import { VuiIcon } from "../icon/Icon";
import { VuiButtonSecondary } from "../button/ButtonSecondary";

type Action = {
  label: string;
  onClick: (row: any) => void;
};

export type Props = {
  row: any;
  actions: Action[];
};

export const VuiTableRowActions = ({ row, actions }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  let content;

  if (actions.length === 1) {
    content = (
      <VuiButtonSecondary color="neutral" onClick={() => actions[0].onClick(row)}>
        {actions[0].label}
      </VuiButtonSecondary>
    );
  } else {
    content = (
      <VuiPopover
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        button={
          <VuiButtonSecondary
            color="neutral"
            size="xs"
            icon={
              <VuiIcon>
                <BiCaretDown />
              </VuiIcon>
            }
          />
        }
      >
        <VuiOptionsList
          onSelectOption={() => {
            setIsOpen(false);
          }}
          options={actions.map((action) => ({ ...action, value: row }))}
        />
      </VuiPopover>
    );
  }

  return <div className="vuiTableActions">{content}</div>;
};
