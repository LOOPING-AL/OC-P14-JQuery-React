import DateInput from './DateInput';
import DateTimeInput from './DateTimeInput';
import defaultProps from './defaultProps';
import TimeInput from './TimeInput';
import { DateTimeInputProps } from './types';

const ChooseDateTimeInput = ({
  id,
  minDate,
  maxDate,
  minTime,
  maxTime,
  required,
  type,
  valueDate,
  valueTime,
  handleChangeDate,
  handleChangeTime,
}: DateTimeInputProps) => {
  if (type === 'time') {
    return (
      <TimeInput
        id={id}
        minTime={minTime}
        maxTime={maxTime}
        required={required}
        value={valueTime}
        handleChangeTime={handleChangeTime}
      />
    );
  }
  if (type === 'date') {
    return (
      <DateInput
        id={id}
        minDate={minDate}
        maxDate={maxDate}
        required={required}
        value={valueDate}
        handleChangeDate={handleChangeDate}
      />
    );
  }
  return (
    <DateTimeInput
      id={id}
      minDate={minDate}
      maxDate={maxDate}
      minTime={minTime}
      maxTime={maxTime}
      required={required}
      valueDate={valueDate}
      valueTime={valueTime}
      handleChangeDate={handleChangeDate}
      handleChangeTime={handleChangeTime}
    />
  );
};

ChooseDateTimeInput.defaultProps = defaultProps;

export default ChooseDateTimeInput;
