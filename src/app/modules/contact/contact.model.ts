import { model, Schema } from "mongoose"
import { ContactList } from "./contact.interface"

const contactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
})

export const Contact = model<ContactList>('Contact', contactSchema)
