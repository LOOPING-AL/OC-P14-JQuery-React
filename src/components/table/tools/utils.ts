import { ColumnNameAndOrderToShowTypeArray, Table } from '../ts';

export const idTable = 'idTable';

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
