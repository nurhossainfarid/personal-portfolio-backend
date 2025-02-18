import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProjectService } from './project.service'
import httpStatus from 'http-status'

const createProject = catchAsync(async (req, res) => {
  const projectData = req.body
  const result = await ProjectService.createProjectIntoDB(projectData)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Project created successfully',
    data: result,
  })
})

const getProjects = catchAsync(async (req, res) => {
  const result = await ProjectService.getProjectsFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects retrieved successfully',
    data: result,
  })
})

const getProjectById = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProjectService.getProjectByIdFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project retrieved successfully',
    data: result,
  })
})

const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params
  const payload = req.body
  const result = await ProjectService.updateProjectIntoDB(id, payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project updated successfully',
    data: result,
  })
})

const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProjectService.deleteProjectFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.NO_CONTENT,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  })
})

export const ProjectController = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
}
