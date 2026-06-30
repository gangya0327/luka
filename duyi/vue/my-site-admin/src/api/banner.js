import request from '@/utils/request'

export function getBannerList(params) {
  return request({
    url: '/api/banner',
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
