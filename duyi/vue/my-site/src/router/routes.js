import Home from '@/views/Home'
import About from '@/views/About'
import Blog from '@/views/Blog/index'
import BlogDetail from '@/views/Blog/detail'
import Project from '@/views/Project'
import Message from '@/views/Message'

export default [
  { name: 'Home', path: "/", component: Home },
  { name: 'About', path: "/about", component: About },
  { name: 'Blog', path: "/blog", component: Blog },
  { name: 'BlogCategory', path: "/blog/category/:categoryId", component: Blog },
  { name: 'BlogDetail', path: "/blog/:id", component: BlogDetail },
  { name: 'Project', path: "/project", component: Project },
  { name: 'Message', path: "/message", component: Message },
]
