import style from './DateInput.module.css';
import { defaultProps } from './defaultProps';
import { Type } from './enums';
import { TimeInputProps } from './types';

const TimeInput = ({ id, minTime, maxTime, required }: TimeInputProps) => (
  <input
    className={style.inputDateOrTime}
    type={Type.TIME}
    id={id}
    min={minTime}
    max={maxTime}
    required={required}
    pattern="\d{2}:\d{2}"
  />
);

TimeInput.defaultProps = defaultProps;

export default TimeInput;
