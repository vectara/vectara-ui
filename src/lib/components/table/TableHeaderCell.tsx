import { BiRadioCircle, BiSolidUpArrowAlt } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiIcon } from "../icon/Icon";
import { Column, OnSort, Row } from "./types";
import { VuiTooltip } from "../tooltip/Tooltip";
import classNames from "classnames";

export type Props<T> = {
  column: Column<T>;
  onSort?: OnSort;
  sortDirection: "asc" | "desc" | "none";
};

export const VuiTableHeaderCell = <T extends Row>({ column, onSort, sortDirection }: Props<T>) => {
  const { name, header } = column;

  const handleSort = () => {
    let newSortDirection: "asc" | "desc" | "none";

    if (sortDirection === "asc") {
      newSortDirection = "desc";
    } else if (sortDirection === "desc") {
      newSortDirection = "none";
    } else {
      newSortDirection = "asc";
    }

    onSort?.(name, newSortDirection);
  };

  let ariaLabel;
  if (sortDirection === "asc") {
    ariaLabel = "Sort descending";
  } else if (sortDirection === "desc") {
    ariaLabel = "Use default sort";
  } else {
    ariaLabel = "Sort ascending";
  }

  const isSortable = onSort && header.isSortable;

  const iconClasses = classNames("vuiTableHeaderCell__icon", {
    "vuiTableHeaderCell__icon--none": sortDirection === "none",
    "vuiTableHeaderCell__icon--desc": sortDirection === "desc"
  });

  return (
    <VuiFlexContainer spacing="xxs" alignItems="center" justifyContent="start">
      {onSort && isSortable ? (
        <VuiTooltip tip={ariaLabel}>
          <button className="vuiTableHeaderCell--sortable" onClick={handleSort} aria-label={ariaLabel} type="button">
            <div className="vuiTableHeaderCell__label">{header.render ? header.render() : name}</div>
            <VuiIcon className={iconClasses} size="s" color={sortDirection === "none" ? "subdued" : "neutral"}>
              {sortDirection === "none" ? <BiRadioCircle /> : <BiSolidUpArrowAlt />}
            </VuiIcon>
          </button>
        </VuiTooltip>
      ) : (
        <div className="vuiTableHeaderCell__label">{header.render ? header.render() : name}</div>
      )}
    </VuiFlexContainer>
  );
};
