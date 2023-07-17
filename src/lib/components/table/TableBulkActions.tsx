import { useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { VuiOptionsList } from "../optionsList/OptionsList";
import { VuiPopover } from "../popover/Popover";
import { VuiIcon } from "../icon/Icon";
import { VuiButtonSecondary } from "../button/ButtonSecondary";
import { Action } from "./TableRowActions";

export type Props = {
  selectedRows: any;
  actions: Action[];
};

export const VuiTableBulkActions = ({ selectedRows, actions }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  let content;

  if (actions.length === 1) {
    content = (
      <VuiButtonSecondary color="neutral" size="m" onClick={() => actions[0].onClick(selectedRows)}>
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
            size="m"
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
          options={actions.map((action) => ({ ...action, value: selectedRows }))}
        />
      </VuiPopover>
    );
  }

  return content;
};
