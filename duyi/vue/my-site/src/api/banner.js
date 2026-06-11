import { request } from '@/utils'

export async function getBannerList() {
  // const res = await axios.get('https://www.woshipm.com/api2/app/article/popular/daily')
  // const res = await axios.get('https://www.woshipm.com/tensorflow/book/recommend_list')
  return await request.get('/api/banner')
}
