import style from './DateInput.module.css';
import { defaultProps } from './defaultProps';
import { Type } from './enums';
import { DateTimeInputProps } from './types';

const DateTimeInput = ({
  id,
  minDate,
  maxDate,
  maxTime,
  minTime,
  required,
}: DateTimeInputProps) => (
  <div className={style.inputDateAndTime}>
    <input
      className={style.inputDateOrTime}
      type={Type.DATE}
      id={id}
      min={minDate}
      max={maxDate}
      required={required}
      pattern="\d{4}-\d{2}-\d{2}"
    />
    <input
      className={style.inputDateOrTime}
      type={Type.TIME}
      id={id}
      min={minTime}
      max={maxTime}
      required={required}
      pattern="\d{2}:\d{2}"
    />
  </div>
);

DateTimeInput.defaultProps = defaultProps;

export default DateTimeInput;
