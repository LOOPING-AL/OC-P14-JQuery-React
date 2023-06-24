import style from './Button.module.css';

const Button = ({ isSubmit, label }: { isSubmit: boolean; label: string }) => (
  <button type={isSubmit ? 'submit' : 'button'} className={style.button}>
    {label}
  </button>
);

export default Button;
