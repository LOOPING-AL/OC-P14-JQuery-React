import style from './SelectInput.module.css';

const defaultProps = { required: false };

const SelectInput = ({
  id,
  label,
  options,
  required,
}: {
  id: string;
  label: string;
  options: string[];
  required?: boolean;
}) => (
  <div className={style.selectInput}>
    <label className={style.label} htmlFor={id}>
      {label}
    </label>
    <select name={id} id={id} required={required}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

SelectInput.defaultProps = defaultProps;

export default SelectInput;
