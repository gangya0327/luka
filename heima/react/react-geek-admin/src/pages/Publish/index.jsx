import { Card, Breadcrumb, Form, Button, Radio, Input, Upload, Space, Select, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router';
import './index.scss';

import RichEditor from '@/components/RichEditor';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { channelListQuery, createArticle } from '@/api/article';

const Publish = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: channelList = [] } = useQuery(channelListQuery);

  const { mutate, isPending } = useMutation({
    mutationFn: createArticle,
    onSuccess: () => {
      message.success('发布成功');
      queryClient.invalidateQueries({ queryKey: ['article'] });
      navigate('/article');
    },
    onError: (error) => {
      message.error(error.response?.data?.message ?? '发布失败');
    },
  });

  const handleFinish = (values) => mutate(values);

  return (
    <div className="publish">
      <Card title={<Breadcrumb items={[{ title: <Link to={'/'}>首页</Link> }, { title: '发布文章' }]} />}>
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} initialValues={{ type: 1 }} onFinish={handleFinish}>
          <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入文章标题' }]}>
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item label="频道" name="channel_id" rules={[{ required: true, message: '请选择文章频道' }]}>
            <Select
              placeholder="请选择文章频道"
              style={{ width: 400 }}
              options={channelList}
              fieldNames={{ label: 'name', value: 'id' }}
            ></Select>
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[
              { required: true, message: '请输入文章内容' },
              {
                validator: (_, v) =>
                  v === '<p></p>' ? Promise.reject(new Error('请输入文章内容')) : Promise.resolve(),
              },
            ]}
          >
            <RichEditor />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit" loading={isPending}>
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Publish;
