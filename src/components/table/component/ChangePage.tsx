import { ChangePageProps, Direction, style } from '..';
import SelectInput from '../../inputs/selectInput/SelectInput';

const ChangePage = ({
  page,
  tableUpdate,
  numberOfElementToShow,
  handleClickPage,
  handleSelectPage,
}: ChangePageProps) => (
  <div className={style.tableHeaderPart}>
    <button
      type="button"
      className={style.tableButton}
      onClick={() => handleClickPage(Direction.Left)}
      disabled={page === 1}
    >
      <span className={style.tableButtonText}>Previous</span>
    </button>
    <SelectInput
      id="page"
      options={Array.from(
        { length: Math.ceil(tableUpdate.length / numberOfElementToShow) },
        (_, i) => String(i + 1)
      )}
      width="60px"
      handleChange={handleSelectPage}
      value={String(page)}
    />
    <button
      type="button"
      className={style.tableButton}
      onClick={() => handleClickPage(Direction.Right)}
      disabled={page === Math.ceil(tableUpdate.length / numberOfElementToShow)}
    >
      <span className={style.tableButtonText}>Next</span>
    </button>
  </div>
);

export default ChangePage;
