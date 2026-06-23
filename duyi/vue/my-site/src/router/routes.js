import Home from '@/views/Home'
import About from '@/views/About'
import Blog from '@/views/Blog/index'
import BlogDetail from '@/views/Blog/detail'
import Project from '@/views/Project'
import Message from '@/views/Message'

export default [
  { name: 'Home', path: "/", component: Home, meta: { title: '首页' } },
  { name: 'About', path: "/about", component: About, meta: { title: '关于' } },
  { name: 'Blog', path: "/blog", component: Blog, meta: { title: '博客' } },
  { name: 'BlogCategory', path: "/blog/category/:categoryId", component: Blog, meta: { title: '博客' } },
  { name: 'BlogDetail', path: "/blog/:id", component: BlogDetail, meta: { title: '博客详情' } },
  { name: 'Project', path: "/project", component: Project, meta: { title: '项目' } },
  { name: 'Message', path: "/message", component: Message, meta: { title: '留言' } },
]
