import { MainTableHeaderProps, style } from '..';
import SelectInput from '../../inputs/selectInput/SelectInput';
import TextInput from '../../inputs/textInput/TextInput';
import ChangePage from './ChangePage';

const MainTableHeader = ({
  haveASearchField,
  entries,
  page,
  numberOfElementToShow,
  table,
  search,
  tableUpdateLength,
  handleChangeElementToShow,
  handleClickPage,
  handleSelectPage,
  handleChangeSearch,
}: MainTableHeaderProps) => (
  <div className={style.tableHeader}>
    <div className={`${style.tableHeaderPart} ${style.tableHeaderLittlePart}`}>
      <p>Show</p>
      <SelectInput
        id="elementShow"
        options={entries}
        value={String(numberOfElementToShow)}
        width="60px"
        handleChange={handleChangeElementToShow}
      />
      <p>entries</p>
    </div>

    <div className={style.tableHeaderPart}>
      {tableUpdateLength === 0 ? (
        <p>No items</p>
      ) : (
        <>
          <p>Showing to </p>
          <p>{(page - 1) * numberOfElementToShow + 1}</p>
          <p>to</p>
          <p>
            {page * numberOfElementToShow + 1 > tableUpdateLength
              ? tableUpdateLength
              : page * numberOfElementToShow + 1}
          </p>
          {tableUpdateLength !== table.length && (
            <>
              <p>of </p>
              <p>{tableUpdateLength}</p>
              <p>update</p>
            </>
          )}
          <p>of </p>
          <p>{table.length}</p>
          <p>total</p>
        </>
      )}
    </div>

    <ChangePage
      page={page}
      tableUpdateLength={tableUpdateLength}
      numberOfElementToShow={numberOfElementToShow}
      handleClickPage={handleClickPage}
      handleSelectPage={handleSelectPage}
    />

    {haveASearchField && (
      <div className={style.tableHeaderPart}>
        <p>Search</p>
        <TextInput
          id="search"
          handleChange={handleChangeSearch}
          value={search}
        />
      </div>
    )}
  </div>
);

export default MainTableHeader;
