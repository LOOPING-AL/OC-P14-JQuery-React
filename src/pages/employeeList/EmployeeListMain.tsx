import { Link } from 'react-router-dom';
import { style } from '../../assets';
import Header from '../../components/header/Header';
import { Pages } from '../../ts/enums';

const EmployeeList = () => (
  <div className={style.main}>
    <Header />
    <div className={style.container}>
      <h1 className={style.title}>Current Employees</h1>

      <Link to={Pages.HOME}>Home</Link>
    </div>
  </div>
);

export default EmployeeList;
