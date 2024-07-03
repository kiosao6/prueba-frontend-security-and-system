import { z } from "zod";

// This is the schema to validate the contact form. We can set custom 
// error messages for any input at any step

export const contactFormSchema = z.object({
  name: z.string( {required_error: 'El nombre es obligatorio'} ).min(2, {
    message: 'El nombre debe tener la menos dos caracteres'
  }),
  email: z.string( {required_error: 'El email es obligatorio'} ).email({
    message: 'El email no puede estar vacío'
  }),
  message: z.string( {required_error: 'El mensaje no puede ir vacío'} ).min(5, {
    message: 'El mensaje debe tener como mínimo 5 caracteres'
  })
})