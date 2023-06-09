import { style } from '../../../assets/index';

const EmployeeList = () => (
  <body>
    <div id="employee-div" className={style.container}>
      <h1>Current Employees</h1>
      <table id="employee-table" className={style.display}></table>
      <a href="index.html">Home</a>
    </div>
  </body>
);

export default EmployeeList;
