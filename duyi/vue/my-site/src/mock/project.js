import Mock from 'mockjs'

Mock.mock(/^\/api\/project\/?$/, 'get', {
  code: '0',
  msg: '请求成功',
  'data|10-20': [{
    id: '@guid',
    title: '@ctitle(1,10)',
    'url|1': ['@url', null],
    'github|1': ['@url', null],
    'description|1-2': ['@cparagraph(1,6)'],
    // thumb: Mock.Random.image('300x200', '#efc', '#fcf', 'random-image'),
    'thumb|1': [
      'https://picsum.photos/id/310/240/160',
      'https://picsum.photos/id/311/240/160',
      'https://picsum.photos/id/312/240/160',
      'https://picsum.photos/id/313/240/160',
      'https://picsum.photos/id/314/240/160',
      'https://picsum.photos/id/315/240/160',
      'https://picsum.photos/id/316/240/160',
      'https://picsum.photos/id/317/240/160',
      'https://picsum.photos/id/318/240/160',
      'https://picsum.photos/id/319/240/160',
      'https://picsum.photos/id/320/240/160',
      'https://picsum.photos/id/321/240/160',
      'https://picsum.photos/id/322/240/160',
      'https://picsum.photos/id/323/240/160',
      'https://picsum.photos/id/325/240/160',
      'https://picsum.photos/id/327/240/160',
      'https://picsum.photos/id/328/240/160',
      'https://picsum.photos/id/329/240/160',
      'https://picsum.photos/id/330/240/160',
    ],
  }]
})