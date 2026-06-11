import Mock from 'mockjs'

Mock.mock('/api/banner', 'get', {
  code: '0',
  msg: '请求失败',
  data: [{
    id: 1,
    title: 'banner1',
    midImg: 'https://picsum.photos/id/10/400/300',
    bigImg: 'https://picsum.photos/id/10/1000/800',
  }, {
    id: 2,
    title: 'banner2',
    midImg: 'https://picsum.photos/id/11/400/300',
    bigImg: 'https://picsum.photos/id/11/1000/800',
  }, {
    id: 3,
    title: 'banner3',
    midImg: 'https://picsum.photos/id/12/400/300',
    bigImg: 'https://picsum.photos/id/12/1000/800',
  }]
})