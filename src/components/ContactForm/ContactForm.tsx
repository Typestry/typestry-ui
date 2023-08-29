import { TextField } from "../TextField"
import { TextArea } from "../TextArea"
import { Form } from "../Form/Form"
import { Button } from "../Button"

export const ContactForm = () => {
  return (
    <Form
      action={`${import.meta.env.VITE_APP_FUNCTIONS_URL}/sendEmail`}
      method="POST"
    >
      {(isSubmitting, isError) => (
        <div className="min-h-[400px] flex flex-col gap-y-4">
          <TextField
            label="First Name"
            aria-label="Enter your first name"
            required
            name="firstName"
          />
          <TextField
            label="Last Name"
            aria-label="Enter your last name"
            name="lastName"
          />
          <TextField
            label="Email"
            required
            type="email"
            aria-label="Enter your email"
            name="email"
          />
          <TextArea
            label="Message"
            required
            aria-label="Enter your message"
            name="message"
          />
          {isError && (
            <p className="text-[var(--error-color)]">
              There was an error with your request.
            </p>
          )}
          <Button type="submit" className="mt-4" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      )}
    </Form>
  )
}
