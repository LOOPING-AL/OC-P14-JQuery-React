import DateInput from './DateInput';
import DateTimeInput from './DateTimeInput';
import { defaultProps } from './defaultProps';
import { Type } from './enums';
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
}: DateTimeInputProps) => {
  if (type === Type.TIME) {
    return (
      <TimeInput
        id={id}
        minTime={minTime}
        maxTime={maxTime}
        required={required}
      />
    );
  }
  if (type === Type.DATE) {
    return (
      <DateInput
        id={id}
        minDate={minDate}
        maxDate={maxDate}
        required={required}
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
    />
  );
};

ChooseDateTimeInput.defaultProps = defaultProps;

export default ChooseDateTimeInput;
