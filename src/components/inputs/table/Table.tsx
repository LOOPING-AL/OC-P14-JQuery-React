import { useState } from 'react';
import { tableColumns } from '../../../assets';
import SelectInput from '../selectInput/SelectInput';
import TextInput from '../textInput/TextInput';
import { Direction } from './enums';
import style from './Table.module.css';

const Table = ({
  table,
}: {
  table: { [key: string]: string | number | undefined }[];
}) => {
  const defaultNumberToshow = 20;

  const getColumns = (
    array: { [key: string]: string | number | undefined }[]
  ) => {
    const columns: string[] = [];
    array.map((element) =>
      Object.keys(element).map(
        (el) => !columns.find((column) => el === column) && columns.push(el)
      )
    );
    return columns;
  };

  const allColumns: string[] = getColumns(table);

  const [tableToShow, setTableToShow] = useState(
    table.slice(0, defaultNumberToshow)
  );
  const [page, setPage] = useState(1);
  const [numberOfElementToShow, setNumberOfElementToShow] =
    useState(defaultNumberToshow);

  const handleChange = (value: string) => {
    const numberOfElementToShowTest = Number(value);
    setNumberOfElementToShow(numberOfElementToShowTest);
    setTableToShow(table.slice(0, numberOfElementToShowTest));

    setPage(1);
  };

  const handleClick = (direction: Direction) => {
    if (direction === Direction.Right) {
      setPage(page + 1);
      return;
    }
    setPage(page - 1);
  };

  return (
    <div className={style.mainTable}>
      <div className={style.tableHeader}>
        <div className={style.tableHeaderPart}>
          <p>Show</p>
          <SelectInput
            id="elementShow"
            options={['5', '10', '20', '50', '100']}
            value={String(defaultNumberToshow)}
            width="60px"
            handleChange={(value) => handleChange(value)}
          />
          <p>entries</p>
        </div>

        <div className={style.tableHeaderPart}>
          <p>Showing to </p>
          <p>{(page - 1) * numberOfElementToShow + 1}</p>
          <p>to</p>
          <p>{numberOfElementToShow}</p>
          <p>of </p>
          <p>{table.length}</p>
        </div>

        <div className={style.tableHeaderPart}>
          <button
            type="button"
            className={style.tableButton}
            onClick={() => handleClick(Direction.Left)}
          >
            Previous
          </button>
          <SelectInput
            id="page"
            options={Array.from(
              { length: Math.ceil(table.length / numberOfElementToShow) },
              (_, i) => String(i + 1)
            )}
            width="60px"
          />
          <button
            type="button"
            className={style.tableButton}
            onClick={() => handleClick(Direction.Right)}
          >
            Next
          </button>
        </div>

        <div className={style.tableHeaderPart}>
          <p>Search</p>
          <TextInput id="search" />
        </div>
      </div>

      <table className={style.table} style={{ width: '1200px' }}>
        <thead>
          <tr>
            {allColumns.map((column) => (
              <th
                key={column}
                style={{
                  height: '10px',
                  width: `${100 / tableColumns.length}%`,
                }}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableToShow.map((element) => (
            <tr
              key={table.findIndex((elementToFind) =>
                Object.is(elementToFind, element)
              )}
              style={{ height: '55px' }}
            >
              {allColumns.map((column) => (
                <td key={column}>{element[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
