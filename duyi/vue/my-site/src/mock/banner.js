import Mock from 'mockjs'

Mock.mock('/api/banner', 'get', {
  code: '0',
  msg: '请求失败',
  data: [{
    id: 1,
    title: '极致的性能优化',
    midImg: 'https://picsum.photos/id/9/300/240',
    bigImg: 'https://picsum.photos/id/10/800/600',
    description: '深入到浏览器渲染流水线，去优化每一帧的动画，去解决INP的交互延迟'
  }, {
    id: 2,
    title: '复杂的图形学与动画',
    midImg: 'https://picsum.photos/id/10/300/240',
    bigImg: 'https://picsum.photos/id/11/800/600',
    description: '深入Canvas, WebGL, apg, 实现那些让人惊叹的数据可视化和交互效果'
  }, {
    id: 3,
    title: '专业的无障碍',
    midImg: 'https://picsum.photos/id/12/300/240',
    bigImg: 'https://picsum.photos/id/12/800/600',
    description: '确保你的应用，对于有障碍的用户来说，依然是可用和易用的。这本身就是一门极深的学问'
  }, {
    id: 4,
    title: '深入浏览器底层',
    midImg: 'https://picsum.photos/id/13/300/240',
    bigImg: 'https://picsum.photos/id/13/800/600',
    description: '比如内存管理、垃圾回收机制、事件循环的微观任务等等'
  }]
})