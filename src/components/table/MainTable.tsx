import { useEffect, useState } from 'react';
import {
  ColumnNameAndOrderToShowTypeArray,
  Direction,
  MainTableProps,
  SortType,
  addIndex,
  defaultProps,
  getColumns,
  sortColumnType,
  style,
} from '.';
import { MainTableBody, MainTableHeader } from './component';

const Table = ({
  table,
  haveASearchField,
  entries,
  defaultNumberToshow,
  columnNameAndOrderToShow,
}: MainTableProps) => {
  const initialTable = addIndex(table);
  const allColumns: ColumnNameAndOrderToShowTypeArray = columnNameAndOrderToShow
    ? columnNameAndOrderToShow.sort((a, b) => a.order - b.order)
    : getColumns(table);

  const [tableToShow, setTableToShow] = useState(
    initialTable.slice(0, defaultNumberToshow)
  );
  const [tableUpdateLength, setTableUpdateLength] = useState(table.length);
  const [page, setPage] = useState(1);
  const [numberOfElementToShow, setNumberOfElementToShow] = useState(
    defaultNumberToshow || defaultProps.defaultNumberToshow
  );
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<{ column: string; sortType: SortType }>({
    column: allColumns[1].keyObject,
    sortType: SortType.Up,
  });

  const handleChangeElementToShow = (value: string) => {
    setNumberOfElementToShow(Number(value));
    setPage(1);
  };

  const handleSelectPage = (value: string) => {
    setPage(Number(value));
  };

  const handleClickPage = (direction: Direction) => {
    setPage(direction === Direction.Right ? page + 1 : page - 1);
  };

  const handleChangeSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const sortT = (column: string, sortType: SortType) => {
    setSort({ column, sortType });
  };

  useEffect(() => {
    const indexOfFirstElementToShow = (page - 1) * numberOfElementToShow;
    const indexOfLastElementToShow =
      indexOfFirstElementToShow + numberOfElementToShow;

    const tableUpdate = table
      .filter((item) =>
        Object.keys(item).some(
          (k) =>
            item[k] != null &&
            item[k]?.toString().toLowerCase().includes(search.toLowerCase())
        )
      )
      .sort((a, b) => sortColumnType(a, b, sort?.column, sort?.sortType));

    setTableToShow(
      tableUpdate.slice(indexOfFirstElementToShow, indexOfLastElementToShow)
    );
    setTableUpdateLength(tableUpdate.length);
  }, [table, page, numberOfElementToShow, search, sort]);

  return (
    <div className={style.mainTable}>
      <MainTableHeader
        page={page}
        search={search}
        table={table}
        tableUpdateLength={tableUpdateLength}
        haveASearchField={haveASearchField}
        entries={entries || defaultProps.entries}
        numberOfElementToShow={numberOfElementToShow}
        handleClickPage={handleClickPage}
        handleSelectPage={handleSelectPage}
        handleChangeSearch={handleChangeSearch}
        handleChangeElementToShow={handleChangeElementToShow}
      />
      <MainTableBody
        allColumns={allColumns}
        tableToShow={tableToShow}
        sort={(cln, st) => sortT(cln, st)}
      />
    </div>
  );
};

Table.defaultProps = defaultProps;

export default Table;
