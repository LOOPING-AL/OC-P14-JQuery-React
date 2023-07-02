import { useState } from 'react';
import { idTable, MainTableBodyProps, SortType, style } from '..';
import MainTableBodyHeader from './MainTableBodyHeader';

const MainTableBody = ({
  allColumns,
  tableToShow,
  sort,
}: MainTableBodyProps) => {
  const initialSortTypes = allColumns.reduce(
    (a, v) => ({ ...a, [v.keyObject]: SortType.None }),
    {}
  );

  const [sortTypes, setSortTypes] = useState<{ [key: string]: SortType }>(
    initialSortTypes
  );

  const changeSortTypes = (column: string, sortType: SortType) => {
    setSortTypes(() => ({
      ...initialSortTypes,
      ...{ [column]: sortType },
    }));

    sort({ column, sortType });
  };

  const handleClick = (column: string) => {
    switch (sortTypes[column]) {
      case SortType.None:
        changeSortTypes(column, SortType.Up);
        break;

      case SortType.Up:
        changeSortTypes(column, SortType.Down);
        break;

      default:
        changeSortTypes(column, SortType.None);
    }
  };

  return (
    <table className={style.table} style={{ width: '1200px' }}>
      <thead>
        <tr>
          {allColumns.map(
            (column) =>
              column.keyObject !== idTable && (
                <MainTableBodyHeader
                  key={column.keyObject}
                  allColumns={allColumns}
                  column={column}
                  sortType={sortTypes[column.keyObject]}
                  handleClick={handleClick}
                />
              )
          )}
        </tr>
      </thead>

      <tbody>
        {tableToShow.map((element) => (
          // eslint-disable-next-line @typescript-eslint/dot-notation
          <tr key={String(element['_id'])}>
            {allColumns.map(
              (column) =>
                column.keyObject !== idTable && (
                  <td key={column.keyObject}>
                    {String(element[column.keyObject])}
                  </td>
                )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MainTableBody;
