import { model, Schema } from 'mongoose'
import { TBlog } from './blog.interface'

const blogSchema = new Schema<TBlog>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publish_date: {
    type: String,
    required: true,
  },
  author_name: {
    type: String,
    required: true,
  },
  blog_image: {
    type: String,
    required: true,
  },
  total_likes: {
    type: String,
    default: '0',
  },
  category: {
    type: String,
    required: true,
  },
})

export const Blog = model<TBlog>('Blog', blogSchema)
