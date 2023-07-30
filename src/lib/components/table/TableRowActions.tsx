import { useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { VuiOptionsList } from "../optionsList/OptionsList";
import { VuiPopover } from "../popover/Popover";
import { VuiIcon } from "../icon/Icon";
import { VuiButtonSecondary } from "../button/ButtonSecondary";
import { Row } from "./types";

export type Action<T> = {
  label: string;
  isDisabled?: (row: T) => boolean;
  onClick: (row: T) => void;
};

export type Props<T> = {
  row: any;
  actions: Action<T>[];
  onToggle: (isSelected: boolean) => void;
};

export const VuiTableRowActions = <T extends Row>({ row, actions, onToggle }: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  // Filter out disabled actions.
  const actionOptions = actions.reduce((acc, action) => {
    const { label, isDisabled, onClick } = action;
    if (!isDisabled?.(row)) {
      acc.push({ label, onClick, value: row });
    }
    return acc;
  }, [] as any);

  if (!actionOptions.length) {
    return null;
  }

  const content = (
    <VuiPopover
      isOpen={isOpen}
      setIsOpen={() => {
        setIsOpen(!isOpen);
        onToggle(!isOpen);
      }}
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
          onToggle(false);
        }}
        options={actionOptions}
      />
    </VuiPopover>
  );

  return <div className="vuiTableActions">{content}</div>;
};
