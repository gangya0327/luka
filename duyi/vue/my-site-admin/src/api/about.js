import request from '@/utils/request'

export function getAbout() {
  return request({
    url: '/api/about',
    method: 'get'
  })
}

export function editAbout(data) {
  return request({
    url: '/api/about',
    method: 'post',
    data
  })
}
