import { createId } from "../../utils/createId";
import { Column, Row } from "./types";

type Props<T> = {
  column?: Column<T>;
  children: React.ReactNode;
};

export const VuiTableCell = <T extends Row>({ column, children }: Props<T>) => {
  const id = createId();
  return (
    <div className="vuiTableCellWrapper">
      <div aria-labelledby={id} className="vuiTableCell">
        {children}
      </div>

      <div id={id} className="vuiTableCell__label">
        {column?.header.render ? column.header.render() : column?.name}
      </div>
    </div>
  );
};
