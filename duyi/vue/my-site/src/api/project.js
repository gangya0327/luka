import { request } from '@/utils'

export async function getProject() {
  return await request.get('/api/project')
}
