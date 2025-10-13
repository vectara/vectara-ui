import { BiChevronUp } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIcon } from "../icon/Icon";
import { Column, OnSort, Row } from "./types";
import { VuiIconButton } from "../button/IconButton";
import { useState } from "react";

export type Props<T> = {
  column: Column<T>;
  onSort?: OnSort;
};

export const VuiTableHeaderCell = <T extends Row>({ column, onSort }: Props<T>) => {
  const { name, header } = column;

  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";

    setSortDirection(newSortDirection);
    onSort?.(name, newSortDirection);
  };

  return (
    <VuiFlexContainer spacing="xxs" alignItems="center" justifyContent="start">
      <div className="vuiTableHeaderCell__label">{header.render ? header.render() : name}</div>

      {onSort && header.isSortable && (
        <VuiFlexItem grow={false} shrink={false}>
          <VuiIconButton
            color="neutral"
            icon={
              <VuiIcon
                className={`vuiTableHeaderCell__icon ` + (sortDirection === "desc" && "vuiTableHeaderCell__icon--desc")}
                size="s"
              >
                <BiChevronUp />
              </VuiIcon>
            }
            aria-label="Sort"
            onClick={handleSort}
          />
        </VuiFlexItem>
      )}
    </VuiFlexContainer>
  );
};
