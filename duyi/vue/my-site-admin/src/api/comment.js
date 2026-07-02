import request from '@/utils/request'

export function getCommentList(params) {
  return request({
    url: '/api/comment',
    method: 'get',
    params
  })
}

export function delComment(id) {
  return request({
    url: '/api/comment/' + id,
    method: 'delete'
  })
}
