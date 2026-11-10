import { Outlet, useNavigate } from 'react-router';
import { TabBar } from 'antd-mobile';
import { getBillList } from '@/store/modules/billStore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './index.scss';
import { BillOutline, AddCircleOutline, CalculatorOutline } from 'antd-mobile-icons';

const tabs = [
  { key: '/month', title: '月度账单', icon: <BillOutline /> },
  { key: '/new', title: '记账', icon: <AddCircleOutline /> },
  { key: '/year', title: '年度账单', icon: <CalculatorOutline /> },
];

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);

  const navigate = useNavigate();
  const switchRoute = (path) => {
    navigate(path);
  };

  return (
    <div className="layout">
      {/* <h1>layout</h1>
      <Link to="/"> 面板</Link>
      <Link to="/about">关于</Link>

      <div className="purple">
        <Button color="primary">局部按钮</Button>
      </div>

      <Button color="primary">全局按钮</Button> */}

      <div className="container">
        <Outlet />
      </div>

      <div className="footer">
        <TabBar onChange={switchRoute}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title}></TabBar.Item>
          ))}
        </TabBar>
      </div>
    </div>
  );
};

export default Layout;
