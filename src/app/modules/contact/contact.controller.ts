import catchAsync from '../../utils/catchAsync'
import { ContactService } from './contact.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

const createContact = catchAsync(async (req, res) => {
  const contactData = req.body
  const result = await ContactService.createContactIntoDB(contactData)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Contact message sent successfully',
    data: result,
  })
})

const getContacts = catchAsync(async (req, res) => {
  const result = await ContactService.getContactsFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact messages retrieved successfully',
    data: result,
  })
})

export const ContactController = {
  createContact,
  getContacts,
}
