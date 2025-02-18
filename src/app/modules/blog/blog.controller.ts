import catchAsync from '../../utils/catchAsync'
import { BlogServices } from './blog.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

const createBlog = catchAsync(async (req, res) => {
  const blogData = req.body
  const result = await BlogServices.createBlogIntoDB(blogData)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Blog created successfully',
    data: result,
  })
})

const getBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getBlogsFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs retrieved successfully',
    data: result,
  })
})

const getBlogById = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BlogServices.getBlogByIdFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog retrieved successfully',
    data: result,
  })
})

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const payload = req.body
  const result = await BlogServices.updateBlogIntoDB(id, payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  })
})

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BlogServices.deleteBlogFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete blog successfully',
    data: result,
  })
})

export const BlogController = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
}
