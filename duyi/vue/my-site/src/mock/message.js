import Mock from 'mockjs'
import qs from 'querystring'

Mock.mock('/api/message', 'post', {
  code: '0',
  msg: '请求成功',
  data: {
    id: '@guid',
    nickname: '@cname',
    content: '@cparagraph(1,4)',
    createDate: '@datetime',
    'avatar|1': [
      'https://picsum.photos/id/110/300/240',
      'https://picsum.photos/id/111/300/240',
      'https://picsum.photos/id/112/300/240',
      'https://picsum.photos/id/113/300/240',
      'https://picsum.photos/id/114/300/240',
      'https://picsum.photos/id/115/300/240',
      'https://picsum.photos/id/116/300/240',
      'https://picsum.photos/id/117/300/240',
      'https://picsum.photos/id/118/300/240',
      'https://picsum.photos/id/119/300/240',
    ],
  }
})

Mock.mock(/^\/api\/message\/?(\?.+)?$/, 'get', function (options) {
  const query = qs.parse(options.url)
  return Mock.mock({
    code: '0',
    msg: '请求成功',
    data: {
      'total|1-20': 0,
      [`rows|${query.limit || 10}`]: [{
        id: '@guid',
        nickname: '@cname',
        content: '@cparagraph',
        'avatar|1': [
          'https://picsum.photos/id/210/240/160',
          'https://picsum.photos/id/211/240/160',
          'https://picsum.photos/id/212/240/160',
          'https://picsum.photos/id/213/240/160',
          'https://picsum.photos/id/214/240/160',
          'https://picsum.photos/id/215/240/160',
          'https://picsum.photos/id/216/240/160',
          'https://picsum.photos/id/217/240/160',
          'https://picsum.photos/id/218/240/160',
          'https://picsum.photos/id/219/240/160',
          'https://picsum.photos/id/220/240/160',
          'https://picsum.photos/id/221/240/160',
          'https://picsum.photos/id/222/240/160',
          'https://picsum.photos/id/223/240/160',
          'https://picsum.photos/id/225/240/160',
          'https://picsum.photos/id/227/240/160',
          'https://picsum.photos/id/228/240/160',
          'https://picsum.photos/id/229/240/160',
          'https://picsum.photos/id/230/240/160',
        ],
        createDate: '@datetime',
      }]
    }
  })
})