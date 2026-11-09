import { Link, Outlet } from 'react-router';
import { Button } from 'antd-mobile';
import { getBillList } from '@/store/modules/billStore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);
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
