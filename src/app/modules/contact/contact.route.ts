import express from 'express'
import { ContactController } from './contact.controller'

const router = express.Router()

router.post('/create-contact', ContactController.createContact)
router.get('/', ContactController.getContacts)

export const ContactRoutes = router
