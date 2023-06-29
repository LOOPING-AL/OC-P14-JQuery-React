import { caretUp, MainTableBodyHeaderProps, SortType, style } from '..';

const MainTableBodyHeader = ({
  allColumns,
  sortType,
  handleClick,
  column,
}: MainTableBodyHeaderProps) => (
  <th
    style={{ width: `${100 / allColumns.length}%` }}
    onClick={() => handleClick(column.keyObject)}
  >
    <div className={style.columnHeader}>
      <p>{column.columnName}</p>
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
