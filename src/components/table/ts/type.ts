import { Direction, SortType } from './enums';

export interface MainTableProps {
  haveASearchInput?: boolean;
  entries?: string[];
  defaultNumberToshow?: number;
  columnNameAndOrderToShow?: ColumnNameAndOrderToShowTypeArray | undefined;
  onChange: (params: {
    page: number;
    numberOfElementToShow: number;
    search: string;
    sort: Sort;
  }) => Promise<any>;
}

export type ColumnNameAndOrderToShowTypeArray = ColumnNameAndOrderToShowType[];

export type ColumnNameAndOrderToShowType = {
  columnName: string;
  keyObject: string;
  order: number;
};

export interface MainTableHeaderProps {
  haveASearchInput?: boolean;
  entries: string[];
  page: number;
  numberOfElementToShow: number;
  tableTotalLength: number;
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
  sort: (sortValue: Sort) => void;
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
  id: string;
};

export type Table = TableElement[];

export type Sort = { column: string; sortType: SortType };
