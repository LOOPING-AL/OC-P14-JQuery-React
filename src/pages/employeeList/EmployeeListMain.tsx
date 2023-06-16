import { Link } from 'react-router-dom';
import { style, tableColumns } from '../../assets';
import employees from '../../assets/informations/employee';
import { TextInput } from '../../components';
import Header from '../../components/header/Header';
import SelectInput from '../../components/inputs/selectInput/SelectInput';
import { Pages } from '../../ts/enums';

const EmployeeList = () => (
  <div className={style.main}>
    <Header />
    <div className={style.container}>
      <Link to={Pages.HOME} className={style.link}>
        Home
      </Link>
      <h1 className={style.title}>Current Employees</h1>

      <div className={style.employeeListTableHeader}>
        <div className={style.employeeListTableHeaderPart}>
          <p>Show</p>
          <SelectInput
            id="elementShow"
            options={['5', '10', '20', '50', '100']}
            width="60px"
          />
          <p>entries</p>
        </div>

        <div className={style.employeeListTableHeaderPart}>
          <p>Search</p>
          <TextInput id="search" />
        </div>
      </div>

      <table className={style.table}>
        <tr>
          {tableColumns.map((column) => (
            <th key={column.data}>{column.title}</th>
          ))}
        </tr>

        {employees.map((employee) => (
          <tr>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.startDate}</td>
            <td>{employee.department}</td>
            <td>{employee.dateOfBirth}</td>
            <td>{employee.street}</td>
            <td>{employee.city}</td>
            <td>{employee.state}</td>
            <td>{employee.zipCode}</td>
          </tr>
        ))}
      </table>
    </div>
  </div>
);

export default EmployeeList;
