import style from './SelectInput.module.css';

const SelectInput = ({
  id,
  label,
  options,
}: {
  id: string;
  label: string;
  options: string[];
}) => (
  <div className={style.selectInput}>
    <label className={style.label} htmlFor={id}>
      {label}
    </label>
    <select name={id} id={id}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default SelectInput;
