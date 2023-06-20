import { Link } from 'react-router-dom';
import { style, employees } from '../../assets';
import { Header, Table } from '../../components';
import { Pages } from '../../ts/enums';

const EmployeeList = () => (
  <div className={style.main}>
    <Header />

    <div className={style.container}>
      <Link to={Pages.HOME} className={style.link}>
        Home
      </Link>

      <h1 className={style.title}>Current Employees</h1>

      <Table table={employees} />
    </div>
  </div>
);

export default EmployeeList;
