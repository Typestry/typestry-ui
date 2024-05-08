import { z } from "zod"
import { ContactFormSchema } from "./schema"

export type ContactFormValues = z.infer<typeof ContactFormSchema>
