import style from './SelectInput.module.css';

const defaultProps = { required: false, label: undefined, width: '250px' };

const SelectInput = ({
  id,
  label,
  options,
  required,
  width,
}: {
  id: string;
  label?: string;
  options: string[];
  required?: boolean;
  width?: string;
}) => (
  <div className={style.selectInput}>
    <label className={style.label} htmlFor={id}>
      {label}
    </label>
    <select name={id} id={id} required={required} style={{ width }}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

SelectInput.defaultProps = defaultProps;

export default SelectInput;
