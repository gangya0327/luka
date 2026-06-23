import { request } from '@/utils'

export async function getAbout() {
  return await request.get('/api/about')
}
