import style from './DateInput.module.css';
import { defaultDateTimeProps } from './defaultProps';
import { DateTimeInputProps } from './types';

const DateTimeInput = ({
  id,
  minDate,
  maxDate,
  maxTime,
  minTime,
  required,
  type,
}: DateTimeInputProps) => (
  <>
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
    <input
      className={style.input}
      type={type}
      id={id}
      min={minTime}
      max={maxTime}
      required={required}
      placeholder="dd/mm/yyyy"
      pattern="\d{4}-\d{2}-\d{2}"
    />
  </>
);

DateTimeInput.defaultProps = defaultDateTimeProps;

export default DateTimeInput;
