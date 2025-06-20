import { BiChevronDown } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIcon } from "../icon/Icon";
import { Column, OnSort, Row } from "./types";

export type Props<T> = {
  column: Column<T>;
  onSort?: OnSort;
};

export const VuiTableHeaderCell = <T extends Row>({ column, onSort }: Props<T>) => {
  const { name, header } = column;
  return (
    <VuiFlexContainer spacing="xxs" alignItems="center" justifyContent="start">
      <div className="vuiTableHeaderCell__label">{header.render ? header.render() : name}</div>

      {onSort && header.isSortable && (
        <VuiFlexItem grow={false} shrink={false}>
          <VuiIcon size="s">
            <BiChevronDown />
          </VuiIcon>
        </VuiFlexItem>
      )}
    </VuiFlexContainer>
  );
};
