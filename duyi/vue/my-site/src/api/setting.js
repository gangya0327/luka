import { request } from '@/utils'

export async function getSetting() {
  return await request.get('/api/setting')
}
