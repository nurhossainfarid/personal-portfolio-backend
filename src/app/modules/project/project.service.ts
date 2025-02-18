import { TProject } from './project.interface'
import { Project } from './project.model'

const createProjectIntoDB = async (payload: TProject) => {
  return await Project.create(payload)
}

const getProjectsFromDB = async () => {
  return await Project.find()
}

const getProjectByIdFromDB = async (id: string) => {
  return await Project.findById(id)
}

const updateProjectIntoDB = async (id: string, payload: Partial<TProject>) => {
  return await Project.findByIdAndUpdate(id, payload, { new: true })
}

const deleteProjectFromDB = async (id: string) => {
  return await Project.findByIdAndDelete(id)
}

export const ProjectService = {
  createProjectIntoDB,
  getProjectsFromDB,
  getProjectByIdFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
}
