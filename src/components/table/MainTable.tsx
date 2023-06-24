import { useEffect, useState } from 'react';
import {
  addIndex,
  ColumnNameAndOrderToShowType,
  defaultProps,
  Direction,
  getColumns,
  MainTableProps,
  sort,
  SortType,
  style,
} from '.';
import { MainTableHeader, MainTableBody } from './component';

const Table = ({
  table,
  haveASearchField,
  entries,
  defaultNumberToshow,
  columnNameAndOrderToShow,
}: MainTableProps) => {
  const initialTable = addIndex(table);
  const allColumns: ColumnNameAndOrderToShowType = columnNameAndOrderToShow
    ? columnNameAndOrderToShow.sort((a, b) => a.order - b.order)
    : getColumns(table);

  const [tableToShow, setTableToShow] = useState(
    initialTable.slice(0, defaultNumberToshow)
  );
  const [tableUpdate, setTableUpdate] = useState(initialTable);
  const [page, setPage] = useState(1);
  const [numberOfElementToShow, setNumberOfElementToShow] = useState(
    defaultNumberToshow || defaultProps.defaultNumberToshow
  );
  const [search, setSearch] = useState('');

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
    setTableUpdate(
      table.filter((item) =>
        Object.keys(item).some(
          (k) =>
            item[k] != null &&
            item[k]?.toString().toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  };

  const sortT = (column: string, sortType: SortType) => {
    const tempTable = initialTable;
    if (sortType === SortType.None) {
      setTableUpdate(initialTable);
    }
    setTableUpdate(tempTable.sort((a, b) => sort(a, b, column, sortType)));
  };

  useEffect(() => {
    const indexOfFirstElementToShow = (page - 1) * numberOfElementToShow;

    setTableToShow(
      tableUpdate.slice(
        indexOfFirstElementToShow,
        indexOfFirstElementToShow + numberOfElementToShow
      )
    );
  }, [tableUpdate, page, numberOfElementToShow]);

  return (
    <div className={style.mainTable}>
      <MainTableHeader
        page={page}
        numberOfElementToShow={numberOfElementToShow}
        tableUpdate={tableUpdate}
        search={search}
        handleChangeElementToShow={handleChangeElementToShow}
        handleClickPage={handleClickPage}
        handleSelectPage={handleSelectPage}
        handleChangeSearch={handleChangeSearch}
        haveASearchField={haveASearchField}
        entries={entries || defaultProps.entries}
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
