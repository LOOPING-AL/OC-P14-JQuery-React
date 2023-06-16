import style from './DateInput.module.css';
import { defaultProps } from './defaultProps';
import { Type } from './enums';
import { DateInputProps } from './types';

const DateInput = ({ id, minDate, maxDate, required }: DateInputProps) => (
  <input
    className={style.inputDateOrTime}
    type={Type.DATE}
    id={id}
    min={minDate}
    max={maxDate}
    required={required}
    pattern="\d{4}-\d{2}-\d{2}"
  />
);

DateInput.defaultProps = defaultProps;

export default DateInput;
