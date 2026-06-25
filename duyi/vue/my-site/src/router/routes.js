export default [
  { name: 'Home', path: "/", component: () => import('@/views/Home'), meta: { title: '首页' } },
  { name: 'About', path: "/about", component: () => import('@/views/About'), meta: { title: '关于' } },
  { name: 'Blog', path: "/blog", component: () => import('@/views//Blog/index'), meta: { title: '博客' } },
  { name: 'BlogCategory', path: "/blog/category/:categoryId", component: () => import('@/views/Blog/index'), meta: { title: '博客' } },
  { name: 'BlogDetail', path: "/blog/:id", component: () => import('@/views/Blog/detail'), meta: { title: '博客详情' } },
  { name: 'Project', path: "/project", component: () => import('@/views/Project'), meta: { title: '项目' } },
  { name: 'Message', path: "/message", component: () => import('@/views/Message'), meta: { title: '留言' } },
  { name: 'NotFound', path: "*", component: () => import('@/views/404'), meta: { title: '404' } },
]
