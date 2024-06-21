import TextField from "@/components/TextField"
import TextArea from "@/components/TextArea"
import Button from "@/components/Button"
import axios from "axios"
import useForm from "@/hooks/useForm"
import { ContactFormValues } from "./types"
import { ComponentPropsWithoutRef } from "react"
import classNames from "classnames"

export interface ContactFormProps {
  template_id: string
  user_id: string
  service_id: string
  slotProps?: {
    root?: ComponentPropsWithoutRef<"form">
  }
}

const ContactForm = ({
  template_id,
  user_id,
  service_id,
  slotProps,
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
    <form
      {...slotProps?.root}
      className={classNames(
        "h-full flex flex-col gap-y-4",
        slotProps?.root?.className,
      )}
      onSubmit={handleSubmit}
    >
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

export default ContactForm
