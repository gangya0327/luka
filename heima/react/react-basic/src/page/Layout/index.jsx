import { Link, Outlet } from 'react-router';
import { Button } from 'antd-mobile';

const Layout = () => {
  return (
    <div>
      <h1>layout</h1>
      <Link to="/"> 面板</Link>
      <Link to="/about">关于</Link>

      <div className="purple">
        <Button color="primary">局部按钮</Button>
      </div>

      <Button color="primary">全局按钮</Button>

      <Outlet />
    </div>
  );
};

export default Layout;
