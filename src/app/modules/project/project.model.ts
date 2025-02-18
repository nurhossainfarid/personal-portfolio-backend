import { model, Schema } from 'mongoose'
import { TProject } from './project.interface'

const projectSchema = new Schema<TProject>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  github: { type: String, required: true },
  live: { type: String, required: true },
  features: { type: [String], default: [] },
  technologies: {
    frontend: { type: String },
    backend: { type: String },
    database: { type: String },
    paymentGateway: { type: String },
    deployment: { type: String },
  },
})

export const Project = model<TProject>('Project', projectSchema)
