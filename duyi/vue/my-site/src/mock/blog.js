import Mock from 'mockjs'
import qs from 'querystring'

Mock.mock('/api/blog/category', 'get', {
  code: '0',
  msg: '请求成功',
  'data|5-10': [
    {
      'id|+1': 1,
      name: '分类@id',
      'articleCount|0-30': 0,
      'order|+1': 1,
    }
  ]
})

Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function (options) {
  const query = qs.parse(options.url)
  return Mock.mock({
    code: '0',
    msg: '请求成功',
    data: {
      'total|200-500': 0,
      [`rows|${query.limit || 10}`]: [{
        id: '@guid',
        title: '@ctitle(1, 20)',
        description: '@cparagraph',
        category: {
          "id|1-10": 0,
          name: '分类@id'
        },
        'scanNumber|0-500': 10,
        'commentNumber|0-200': 10,
        thumb: [Mock.Random.image('240x160', '#efc', '#fcf', 'random-image'), null],
        createDate: '@datetime',
      }]
    }
  })
})