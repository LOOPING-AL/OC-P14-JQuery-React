import { Link } from 'react-router-dom';
import { style, columnNameAndOrderToShow } from '../../assets';
import { Header, Table } from '../../components';
import { Pages } from '../../ts/enums';
import { getEmployees } from '../../api/apiClient';

const EmployeeList = () => {
  const handleChange = (body: any) => getEmployees(body);

  return (
    <div className={style.main}>
      <Header />

      <div className={style.container}>
        <Link to={Pages.HOME} className={style.link}>
          Home
        </Link>

        <h1 className={style.title}>Current Employees</h1>

        <Table
          onChange={handleChange}
          columnNameAndOrderToShow={columnNameAndOrderToShow}
        />
      </div>
    </div>
  );
};

export default EmployeeList;
