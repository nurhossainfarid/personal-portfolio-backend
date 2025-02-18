import express from 'express'
import { BlogController } from './blog.controller'

const router = express.Router()

router.post('/create-blog', BlogController.createBlog)
router.get('/', BlogController.getBlogs)
router.get('/:id', BlogController.getBlogById)
router.put('/:id', BlogController.updateBlog)
router.delete('/:id', BlogController.deleteBlog)

export const BlogRoutes = router
