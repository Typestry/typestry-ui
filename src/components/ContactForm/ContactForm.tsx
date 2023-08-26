import { TextField } from "../TextField"
import { useFormState } from "../../hooks/useFormState"
import { Button } from "../Button"
import { Contact } from "../../../global/types/Contact"
import { TextArea } from "../TextArea"

type FormValues = Contact

interface ContactFormProps {
  onSubmit: (values: FormValues) => void
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const { handleSubmit, registerField, isSubmitting } = useFormState({
    onSubmit,
    initialValues,
  })

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-[400px] flex flex-col gap-y-4"
    >
      <TextField
        label="First Name"
        aria-label="Enter your first name"
        required
        {...registerField("firstName")}
      />
      <TextField
        label="Last Name"
        aria-label="Enter your last name"
        {...registerField("lastName")}
      />
      <TextField
        label="Email"
        required
        type="email"
        aria-label="Enter your email"
        {...registerField("email")}
      />
      <TextArea
        label="Message"
        required
        aria-label="Enter your message"
        {...registerField("message")}
      />
      <Button className="mt-4" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  )
}
