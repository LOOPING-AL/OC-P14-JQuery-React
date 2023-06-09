import { createBrowserRouter } from 'react-router-dom';
import HomeMain from '../components/pages/home/homeMain';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeMain />,
  },
]);

export default router;
