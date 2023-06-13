import { createBrowserRouter } from 'react-router-dom';
import EmployeeList from '../pages/employeeList/EmployeeListMain';
import HomeMain from '../pages/home/HomeMain';
import { Pages } from '../ts/enums';

const router = createBrowserRouter([
  {
    path: Pages.HOME,
    element: <HomeMain />,
  },
  {
    path: Pages.EMPLOYEElIST,
    element: <EmployeeList />,
  },
]);

export default router;
