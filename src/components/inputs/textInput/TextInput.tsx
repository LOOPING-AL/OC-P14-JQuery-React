import style from './TextInput.module.css';

const InputText = ({
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
    <input className={style.input} type="text" id={id} />
    <p className={style.errorMessage}>{errorMessage}</p>
  </div>
);

export default InputText;
