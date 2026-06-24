import { request } from '@/utils'

export async function getMessage(page = 1, limit = 10) {
  return await request.get('/api/message', {
    params: { page, limit }
  })
}

// 添加评论
export async function addMessage(content) {
  return await request.post('/api/message', content)
}
