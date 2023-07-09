import { logo } from '../../assets';
import style from './Header.module.css';

const Header = () => (
  <div className={style.main}>
    <img
      src={logo}
      alt="logo"
      className={style.logo}
      width="150"
      height="138"
    />
    <h1 className={style.title}>HRnet</h1>
  </div>
);
export default Header;
