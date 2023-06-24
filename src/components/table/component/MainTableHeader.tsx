import { MainTableHeaderProps, style } from '..';
import SelectInput from '../../inputs/selectInput/SelectInput';
import TextInput from '../../inputs/textInput/TextInput';
import ChangePage from './ChangePage';

const MainTableHeader = ({
  haveASearchField,
  entries,
  page,
  numberOfElementToShow,
  tableUpdate,
  search,
  handleChangeElementToShow,
  handleClickPage,
  handleSelectPage,
  handleChangeSearch,
}: MainTableHeaderProps) => (
  <div className={style.tableHeader}>
    <div className={style.tableHeaderPart}>
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
      <p>Showing to </p>
      <p>{(page - 1) * numberOfElementToShow + 1}</p>
      <p>to</p>
      <p>
        {page * numberOfElementToShow + 1 > tableUpdate.length
          ? tableUpdate.length
          : page * numberOfElementToShow + 1}
      </p>
      <p>of </p>
      <p>{tableUpdate.length}</p>
    </div>

    <ChangePage
      page={page}
      tableUpdate={tableUpdate}
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
