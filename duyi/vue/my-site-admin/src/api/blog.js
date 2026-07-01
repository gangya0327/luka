import request from '@/utils/request'

export function getBlogList(params) {
  return request({
    url: '/api/blog',
    method: 'get',
    params
  })
}

export function setBanner(data) {
  return request({
    url: '/api/banner',
    method: 'post',
    data
  })
}

export function delBlog(id) {
  return request({
    url: '/api/blog/' + id,
    method: 'delete'
  })
}
