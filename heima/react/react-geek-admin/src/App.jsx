// 过渡首页：接入路由后由 <RouterProvider /> 替换
import reactLogo from '@/assets/react.svg';
import './App.css';
import { Button } from 'antd';

const App = () => (
  <main className="app">
    <img className="app__logo" src={reactLogo} alt="logo" />
    <h1 className="app__title">react-geek-admin</h1>
    <p className="app__desc">工程化基线已就绪，等待第一个业务页面</p>
    <Button type="primary">按钮</Button>
  </main>
);

export default App;
