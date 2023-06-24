import { caretUp, MainTableBodyHeaderProps, SortType, style } from '..';

const MainTableBodyHeader = ({
  allColumns,
  columnName,
  sortType,
  handleClick,
}: MainTableBodyHeaderProps) => (
  <th
    style={{ width: `${100 / allColumns.length}%` }}
    onClick={() => handleClick(columnName)}
  >
    <div className={style.columnHeader}>
      <p>{columnName}</p>
      {sortType !== SortType.None && (
        <img
          src={caretUp}
          alt="caret up"
          className={`${style.caret} ${
            sortType === SortType.Down && style.caretDown
          }`}
        />
      )}
    </div>
  </th>
);

export default MainTableBodyHeader;
