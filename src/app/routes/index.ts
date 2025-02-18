import { Router } from 'express'
import { BlogRoutes } from '../modules/blog/blog.route'
import { ProjectRoutes } from '../modules/project/project.route'
import { ContactRoutes } from '../modules/contact/contact.route'
const router = Router()

const moduleRoutes = [
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/contacts',
    route: ContactRoutes,
  },
]

moduleRoutes.forEach((r) => router.use(r.path, r.route))

export default router
