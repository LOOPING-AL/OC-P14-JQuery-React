import style from './DateInput.module.css';
import { defaultTimeProps } from './defaultProps';
import { TimeInputProps } from './types';

const TimeInput = ({
  id,
  minTime,
  maxTime,
  required,
  type,
}: TimeInputProps) => (
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
);

TimeInput.defaultProps = defaultTimeProps;

export default TimeInput;
