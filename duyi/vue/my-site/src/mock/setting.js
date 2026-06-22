import Mock from 'mockjs'

Mock.mock('/api/setting', 'get', {
  code: '0',
  msg: '请求成功',
  data: {
    avatar: 'https://picsum.photos/id/411/240/160',
    siteTitle: '欢迎来到我的空间',
    github: 'https://github.com/',
    qq: '352495863',
    name: 'yingmenglin',
    phone: '1876543210',
    email: 'kingson.zhang@qq.com',
    icp: '浙ICP备18259号',
    favicon: 'https://picsum.photos/id/381/240/160',
  }
})