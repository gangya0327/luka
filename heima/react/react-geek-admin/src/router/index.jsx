import Layout from '@/pages/Layout';
import Login from '@/pages/Login';

import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '/admin',
    element: <Login />,
  },
]);

export default router;
