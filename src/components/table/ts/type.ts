import { Direction, SortType } from './enums';

export interface MainTableProps {
  table: Table;
  haveASearchField?: boolean;
  entries?: string[];
  defaultNumberToshow?: number;
  columnNameAndOrderToShow?: ColumnNameAndOrderToShowTypeArray | undefined;
}

export type ColumnNameAndOrderToShowTypeArray = ColumnNameAndOrderToShowType[];

export type ColumnNameAndOrderToShowType = {
  columnName: string;
  keyObject: string;
  order: number;
};

export interface MainTableHeaderProps {
  haveASearchField?: boolean;
  entries: string[];
  page: number;
  numberOfElementToShow: number;
  table: Table;
  search: string;
  tableUpdateLength: number;
  handleChangeElementToShow: (value: string) => void;
  handleClickPage: (value: Direction) => void;
  handleSelectPage: (value: string) => void;
  handleChangeSearch: (value: string) => void;
}

export interface MainTableBodyProps {
  allColumns: ColumnNameAndOrderToShowTypeArray;
  tableToShow: Table;
  sort: (column: string, sortType: SortType) => void;
}

export interface MainTableBodyHeaderProps {
  allColumns: ColumnNameAndOrderToShowTypeArray;
  sortType: SortType;
  column: ColumnNameAndOrderToShowType;
  handleClick: (column: string) => void;
}

export interface ChangePageProps {
  page: number;
  tableUpdateLength: number;
  numberOfElementToShow: number;
  handleClickPage: (value: Direction) => void;
  handleSelectPage: (value: string) => void;
}

export type TableElement = {
  [key: string]: string | number | undefined | Date;
};

export type Table = TableElement[];
