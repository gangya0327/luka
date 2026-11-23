import { Card, Form, Input, Button } from 'antd';
import './index.scss';
import reactLogo from '@/assets/react.svg';

const Login = () => (
  <div className="login">
    <Card className="login-container">
      <img className="login-logo" src={reactLogo} alt="" />
      <Form>
        <Form.Item>
          <Input placeholder="请输入手机号" size="large" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="请输入验证码" size="large" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </div>
);
export default Login;
