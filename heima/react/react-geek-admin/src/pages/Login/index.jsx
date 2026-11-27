import { Card, Form, Input, Button, message } from 'antd';
import './index.scss';
import reactLogo from '@/assets/react.svg';
import { useDispatch } from 'react-redux';
import { fetchToken } from '@/store/modules/user';
import { useNavigate } from 'react-router';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await dispatch(fetchToken(values));
      navigate('/');
      message.success('登录成功');
    } catch (e) {
      message.error(e.message);
    }
  };

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={reactLogo} alt="" />
        <Form validateTrigger="onChange" onFinish={onFinish}>
          <Form.Item
            name="mobile"
            rules={[
              { required: true, message: '请输入手机号' },
              { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
            ]}
          >
            <Input placeholder="请输入手机号" size="large" />
          </Form.Item>
          <Form.Item name="code" rules={[{ required: true, message: '请输入验证码' }]}>
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
};
export default Login;
