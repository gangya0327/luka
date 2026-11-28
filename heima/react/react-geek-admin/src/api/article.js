import { request } from '@/utils';

export const channelListQuery = {
  queryKey: ['channel', 'list'],
  queryFn: async () => {
    const res = await request.get('/channels');
    return res.data;
  },
  staleTime: 10 * 60 * 1000,
};

export const createArticle = (values) => request.post('/articles', values);
