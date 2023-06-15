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
      <DateTimeInput
        id={id}
        minDate={minDate}
        maxDate={maxDate}
        required={required}
        minTime={minTime}
        maxTime={maxTime}
        type={Type.TIME}
      />
    );
  }
  if (type === Type.DATE) {
    return (
      <DateInput
        id={id}
        required={required}
        type={Type.DATE}
        minDate={minDate}
        maxDate={maxDate}
      />
    );
  }
  return (
    <TimeInput
      id={id}
      required={required}
      type={Type.TIME}
      minTime={minTime}
      maxTime={maxTime}
    />
  );
};

ChooseDateTimeInput.defaultProps = defaultProps;

export default ChooseDateTimeInput;
