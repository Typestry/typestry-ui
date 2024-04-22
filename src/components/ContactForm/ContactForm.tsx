import { TextField } from "../TextField"
import { TextArea } from "../TextArea"
import { Button } from "../Button"
import axios from "axios"
import { useForm } from "../../hooks/useForm"

interface ContactFormProps {
  template_id: string
  user_id: string
  service_id: string
}

interface ContactFormValues {
  firstName: string
  lastName: string
  email: string
  message: string
}

export const ContactForm = ({
  template_id,
  user_id,
  service_id,
}: ContactFormProps) => {
  const { handleSubmit, isError, isSubmitting, register } =
    useForm<ContactFormValues>({
      onSubmit: (values) => {
        const payload = {
          template_params: values,
          template_id,
          user_id,
          service_id,
        }

        return axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          payload,
        )
      },
    })

  return (
    <form className="h-full flex flex-col gap-y-4" onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        aria-label="Enter your first name"
        required
        {...register("firstName")}
      />
      <TextField
        label="Last Name"
        aria-label="Enter your last name"
        {...register("lastName")}
      />
      <TextField
        label="Email"
        required
        type="email"
        aria-label="Enter your email"
        {...register("email")}
      />
      <TextArea
        label="Message"
        required
        aria-label="Enter your message"
        {...register("message")}
      />
      {isError && (
        <p className="text-[var(--error-color)]">
          There was an error with your request.
        </p>
      )}
      <Button type="submit" className="mt-4" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  )
}
