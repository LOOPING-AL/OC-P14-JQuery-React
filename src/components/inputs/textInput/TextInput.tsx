import style from './TextInput.module.css';

const defaultProps = { label: undefined, errorMessage: undefined };

const InputText = ({
  id,
  label,
  errorMessage,
}: {
  id: string;
  label?: string;
  errorMessage?: string;
}) => (
  <div>
    {label && (
      <label className={style.label} htmlFor={id}>
        {label}
      </label>
    )}
    <input className={style.input} type="text" id={id} />
    {typeof errorMessage === 'string' && (
      <p className={style.errorMessage}>{errorMessage}</p>
    )}
  </div>
);

InputText.defaultProps = defaultProps;

export default InputText;
