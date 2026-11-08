import { Link, Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <h1>layout</h1>
      <Link to="/"> 面板</Link>
      <Link to="/about">关于</Link>

      <Outlet />
    </div>
  );
};

export default Layout;
