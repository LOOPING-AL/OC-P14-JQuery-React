import ChooseDateTimeInput from './ChooseDateTimeInput';
import style from './DateInput.module.css';
import { defaultProps } from './defaultProps';
import { DateTimeInputProps, MainDateTimeInputProps } from './types';

const MainDateTimeInput = ({
  id,
  label,
  errorMessage,
  required,
  type,
  maxDate,
  minDate,
  minTime,
  maxTime,
}: DateTimeInputProps & MainDateTimeInputProps) => (
  <div>
    <label className={style.label} htmlFor={id}>
      {label}
    </label>
    <ChooseDateTimeInput
      id={id}
      required={required}
      type={type}
      minDate={minDate}
      maxDate={maxDate}
      minTime={minTime}
      maxTime={maxTime}
    />
    <p className={style.errorMessage}>{errorMessage}</p>
  </div>
);

MainDateTimeInput.defaultProps = defaultProps;

export default MainDateTimeInput;
