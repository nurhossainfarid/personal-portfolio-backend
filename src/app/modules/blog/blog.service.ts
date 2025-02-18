import { TBlog } from './blog.interface'
import { Blog } from './blog.model'

const createBlogIntoDB = async (payload: TBlog) => {
  return await Blog.create(payload)
}

const getBlogsFromDB = async () => {
  return await Blog.find()
}

const getBlogByIdFromDB = async (id: string) => {
  return await Blog.findById(id)
}

const updateBlogIntoDB = async (id: string, payload: Partial<TBlog>) => {
  return await Blog.findByIdAndUpdate(id, payload, { new: true })
}

const deleteBlogFromDB = async (id: string) => {
  return await Blog.findByIdAndDelete(id)
}

export const BlogServices = {
  createBlogIntoDB,
  getBlogsFromDB,
  getBlogByIdFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
}
