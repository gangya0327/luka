import { Link, useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1> 我是登录页</h1>
      {/* 声明式导航 */}
      <Link to="/article">跳转到文章</Link>
      {/* 命令式导航 */}
      <button onClick={() => navigate('/article')}>点击到文章</button>
      <button onClick={() => navigate('/article?id=100&name=tom')}>searchParams 传参</button>
      <button onClick={() => navigate('/article/101/bill')}>params 传参</button>
    </div>
  );
};

export default Login;
