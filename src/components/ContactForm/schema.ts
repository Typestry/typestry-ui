import { z } from "zod"

export const ContactFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string().optional(),
  email: z.string().email(),
  message: z.string(),
})
