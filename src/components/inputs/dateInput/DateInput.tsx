import style from './DateInput.module.css';

const InputDate = ({
  id,
  label,
  errorMessage,
}: {
  id: string;
  label: string;
  errorMessage: string | undefined;
}) => (
  <div>
    <label className={style.label} htmlFor={id}>
      {label}
    </label>
    <input className={style.input} type="date" id={id} />
    <p className={style.errorMessage}>{errorMessage}</p>
  </div>
);

export default InputDate;
