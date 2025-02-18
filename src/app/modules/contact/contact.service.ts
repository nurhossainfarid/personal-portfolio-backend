import { ContactList } from './contact.interface'
import { Contact } from './contact.model'

const createContactIntoDB = async (payload: ContactList) => {
  return await Contact.create(payload)
}

const getContactsFromDB = async () => {
  return await Contact.find()
}

export const ContactService = {
  createContactIntoDB,
  getContactsFromDB,
}
