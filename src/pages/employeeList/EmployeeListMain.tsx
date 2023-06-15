import { Link } from 'react-router-dom';
import { style, tableColumns } from '../../assets';
import Header from '../../components/header/Header';
import { Pages } from '../../ts/enums';

const EmployeeList = () => (
  <div className={style.main}>
    <Header />
    <div className={style.container}>
      <Link to={Pages.HOME} className={style.link}>
        Home
      </Link>
      <h1 className={style.title}>Current Employees</h1>

      <div className={style.table}>
        {tableColumns.map((column) => (
          <div key={column.data}>{column.title}</div>
        ))}
      </div>
    </div>
  </div>
);

export default EmployeeList;
