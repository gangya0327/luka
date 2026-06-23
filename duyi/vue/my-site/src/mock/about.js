import Mock from 'mockjs'

Mock.mock('/api/about', 'get', {
  code: '0',
  msg: '请求成功',
  data: 'https://www.woshipm.com/'
})