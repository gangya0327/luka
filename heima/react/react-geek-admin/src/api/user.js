import { request } from '@/utils';

export const userInfoQuery = {
  queryKey: ['user', 'info'],
  queryFn: async () => {
    const res = await request.get('/user/profile'); // 拦截器已剥一层 → { data: {...} }
    return res.data; // 再剥 mock 那层，组件只拿干净对象
  },
};
