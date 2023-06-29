import { ColumnNameAndOrderToShowTypeArray, Table, TableElement } from '../ts';
import { SortType } from '../ts/enums';

export const idTable = 'idTable';

export const addIndex = (table: Table) =>
  table.map((el, index) => {
    const temp = el;
    temp[idTable] = index;
    return temp;
  });

export const getColumns = (array: Table) => {
  const columns: ColumnNameAndOrderToShowTypeArray = [];
  array.map((element) =>
    Object.keys(element).map(
      (el, index) =>
        !columns.find((column) => el === column.keyObject) &&
        columns.push({ keyObject: el, columnName: el, order: index })
    )
  );
  return columns;
};

export const sortColumnType = (
  a: TableElement,
  b: TableElement,
  column: string,
  st: SortType
) => {
  const firstValue = st === SortType.Up ? a[column] : b[column];
  const secondValue = st === SortType.Up ? b[column] : a[column];

  if (firstValue || secondValue) {
    if (!firstValue) return -1;
    if (!secondValue) return 1;
    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
      return firstValue - secondValue;
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'string') {
      return firstValue.localeCompare(secondValue);
    }
  }
  return 0;
};
