import express from 'express'
import { ProjectController } from './project.controller'

const router = express.Router()

router.post('/create-project', ProjectController.createProject)
router.get('/', ProjectController.getProjects)
router.get('/:id', ProjectController.getProjectById)
router.put('/:id', ProjectController.updateProject)
router.delete('/:id', ProjectController.deleteProject)

export const ProjectRoutes = router;
