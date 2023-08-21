import { TextField } from "../TextField"
import { useFormState } from "../../hooks/useFormState"
import { Button } from "../Button"
import { Contact } from "../../../global/types/Contact"

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
      <TextField
        label="Message"
        required
        aria-label="Enter your message"
        {...registerField("message")}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full hover:bg-[rgb(51,51,51,0.5)] bg-[rgb(51,51,51,0.8)] border-2 border-white transition-colors duration-300 py-3 md:py-4 mt-4 uppercase"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  )
}
