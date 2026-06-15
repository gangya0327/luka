import { request } from '@/utils'

// 获取博客列表
export async function getBlogList(page = 1, limit = 10, categoryId = -1) {
  return await request.get('/api/blog', {
    params: { page, limit, categoryId }
  })
}

// 获取博客分类
export async function getBlogCategory() {
  return await request.get('/api/blog/category')
}

// 获取博客详情
export async function getBlog(id) {
  return await request.get('/api/blog/' + id)
}

// 添加评论
export async function addBlogComment(commentInfo) {
  return await request.post('/api/blog/comment', commentInfo)
}

// 获取博客评论
export async function getBlogComment(page = 1, limit = 10, blogId = -1) {
  return await request.get('/api/blog/comment', {
    params: { page, limit, blogId }
  })
}
