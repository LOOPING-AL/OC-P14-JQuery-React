import style from './DateInput.module.css';
import { defaultDateProps } from './defaultProps';
import { DateInputProps } from './types';

const DateInput = ({
  id,
  minDate,
  maxDate,
  required,
  type,
}: DateInputProps) => (
  <input
    className={style.input}
    type={type}
    id={id}
    min={minDate}
    max={maxDate}
    required={required}
    placeholder="dd/mm/yyyy"
    pattern="\d{4}-\d{2}-\d{2}"
  />
);

DateInput.defaultProps = defaultDateProps;

export default DateInput;
