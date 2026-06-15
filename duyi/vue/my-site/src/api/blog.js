import { request } from '@/utils'

export async function getBlogList(page = 1, limit = 10, category = -1) {
  return await request.get('/api/blog', {
    params: { page, limit, category }
  })
}

export async function getBlogCategory() {
  return await request.get('/api/blog/category')
}
