import request from '@/utils/request'

export function getBlogList(params) {
  return request({
    url: '/api/blog',
    method: 'get',
    params
  })
}

export function editBlog(data) {
  return request({
    url: '/api/blog/' + data.id,
    method: 'put',
    data
  })
}

export function addBlog(data) {
  return request({
    url: '/api/blog',
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

export function getBlog(id) {
  return request({
    url: '/api/blog/' + id,
    method: 'get'
  })
}
