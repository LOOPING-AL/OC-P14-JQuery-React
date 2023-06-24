import ChooseDateTimeInput from './ChooseDateTimeInput';
import defaultProps from './defaultProps';
import style from './MainDateTimeInput.module.css';
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
  valueDate,
  valueTime,
  handleChangeDate,
  handleChangeTime,
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
      valueDate={valueDate}
      valueTime={valueTime}
      handleChangeDate={handleChangeDate}
      handleChangeTime={handleChangeTime}
    />
    <p className={style.errorMessage}>{errorMessage}</p>
  </div>
);

MainDateTimeInput.defaultProps = defaultProps;

export default MainDateTimeInput;
