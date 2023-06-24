import { Direction, SortType } from './enums';

export interface MainTableProps {
  table: Table;
  haveASearchField?: boolean;
  entries?: string[];
  defaultNumberToshow?: number;
  columnNameAndOrderToShow?: ColumnNameAndOrderToShowType | undefined;
}

export type ColumnNameAndOrderToShowType = {
  columnName: string;
  keyObject: string;
  order: number;
}[];

export interface MainTableHeaderProps {
  haveASearchField?: boolean;
  entries: string[];
  page: number;
  numberOfElementToShow: number;
  tableUpdate: Table;
  search: string;
  handleChangeElementToShow: (value: string) => void;
  handleClickPage: (value: Direction) => void;
  handleSelectPage: (value: string) => void;
  handleChangeSearch: (value: string) => void;
}

export interface MainTableBodyProps {
  allColumns: ColumnNameAndOrderToShowType;
  tableToShow: Table;
  sort: (column: string, sortType: SortType) => void;
}

export interface MainTableBodyHeaderProps {
  allColumns: ColumnNameAndOrderToShowType;
  columnName: string;
  sortType: SortType;
  handleClick: (column: string) => void;
}

export interface ChangePageProps {
  page: number;
  tableUpdate: Table;
  numberOfElementToShow: number;
  handleClickPage: (value: Direction) => void;
  handleSelectPage: (value: string) => void;
}

export type TableElement = {
  [key: string]: string | number | undefined | Date;
};

export type Table = TableElement[];
