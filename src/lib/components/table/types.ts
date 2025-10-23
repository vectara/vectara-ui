export type Row = Record<string, any>;

export type Header = {
  isSortable?: boolean;
  render?: () => React.ReactNode;
};

export type Column<T> = {
  name: string;
  width?: string;
  header: Header;
  render?: (row: T, rowIndex: number) => React.ReactNode;
  className?: string;
  testId?: string | ((row: T) => string);
};

export type OnSort = (column: string, direction: "asc" | "desc" | "none") => void;
