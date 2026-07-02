import request from '@/utils/request'

export function getProjectList(params) {
  return request({
    url: '/api/project',
    method: 'get',
    params
  })
}

export function editProject(data) {
  return request({
    url: '/api/project/' + data.id,
    method: 'put',
    data
  })
}

export function addProject(data) {
  return request({
    url: '/api/project',
    method: 'post',
    data
  })
}

export function delProject(id) {
  return request({
    url: '/api/project/' + id,
    method: 'delete'
  })
}

export function getProject(id) {
  return request({
    url: '/api/project/' + id,
    method: 'get'
  })
}
