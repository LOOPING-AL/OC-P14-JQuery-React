import { useEffect, useState } from 'react';
import {
  ColumnNameAndOrderToShowTypeArray,
  Direction,
  MainTableProps,
  Sort,
  SortType,
  defaultProps,
  getColumns,
  style,
} from '.';
import { MainTableBody, MainTableHeader } from './component';

const Table = ({
  haveASearchInput,
  entries,
  defaultNumberToshow,
  columnNameAndOrderToShow,
  onChange,
}: MainTableProps) => {
  const [allColumns, setAllColumns] =
    useState<ColumnNameAndOrderToShowTypeArray>(
      columnNameAndOrderToShow
        ? columnNameAndOrderToShow.sort((a, b) => a.order - b.order)
        : []
    );
  const [tableToShow, setTableToShow] = useState([]);
  const [tableUpdateLength, setTableUpdateLength] = useState(0);
  const [tableTotalLength, setTableTotalLength] = useState(0);
  const [page, setPage] = useState(1);
  const [numberOfElementToShow, setNumberOfElementToShow] = useState(
    defaultNumberToshow || defaultProps.defaultNumberToshow
  );
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<Sort>({
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

  const sortT = (sortValue: Sort) => {
    setSort(sortValue);
  };

  useEffect(() => {
    onChange({ page, numberOfElementToShow, search, sort }).then((res) => {
      setTableToShow(res.body.tableToShow);
      setTableUpdateLength(res.body.tableUpdateLength);
      setTableTotalLength(res.body.tableTotalLength);
      if (!columnNameAndOrderToShow) {
        setAllColumns(getColumns(res.body.tableToShow));
      }
    });
  }, [
    onChange,
    page,
    numberOfElementToShow,
    search,
    sort,
    columnNameAndOrderToShow,
  ]);

  return (
    <div className={style.mainTable}>
      <MainTableHeader
        page={page}
        search={search}
        tableUpdateLength={tableUpdateLength}
        tableTotalLength={tableTotalLength}
        haveASearchInput={haveASearchInput}
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
        sort={(sortValue) => sortT(sortValue)}
      />
    </div>
  );
};

Table.defaultProps = defaultProps;

export default Table;
