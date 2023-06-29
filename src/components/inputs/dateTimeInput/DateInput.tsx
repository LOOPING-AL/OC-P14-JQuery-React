import defaultProps from './defaultProps';
import InputType from './enums';
import style from './MainDateTimeInput.module.css';
import { DateInputProps } from './types';

const DateInput = ({
  id,
  minDate,
  maxDate,
  required,
  valueDate,
  handleChangeDate,
}: DateInputProps) => (
  <input
    className={style.inputDateOrTime}
    type={InputType.DATE}
    id={id}
    min={minDate}
    max={maxDate}
    required={required}
    pattern="\d{4}-\d{2}-\d{2}"
    value={valueDate}
    onChange={(e) => handleChangeDate && handleChangeDate(e.target.value)}
  />
);

DateInput.defaultProps = defaultProps;

export default DateInput;
