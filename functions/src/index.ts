import { defineSecret } from "firebase-functions/params"
import * as functions from "firebase-functions/v2"
import * as nodemailer from "nodemailer"

const EMAIL = defineSecret("EMAIL")
const PASSWORD = defineSecret("PASSWORD")

export const sendEmail = functions.https.onRequest(
  {
    secrets: [EMAIL, PASSWORD],
    cors: ["https://www.carriedbybees.com"],
  },
  async (req, res) => {
    try {
      const { email, firstName, lastName, message } = req.body

      if (!Object.values(req.body).some(Boolean)) {
        throw Error("INVALID_PAYLOAD")
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: EMAIL.value(),
          pass: PASSWORD.value(),
        },
      })

      const mailOptions = {
        from: email,
        to: EMAIL.value(),
        subject: `Carried by Bees Form Inquiry from ${firstName} ${lastName}`,
        text: message,
      }

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          throw Error("MAIL_SEND_FAILURE")
        } else {
          res.status(200)
          res.send("MAIL_SEND_SUCCESS")
        }
      })
    } catch (err) {
      res.status(500)
      res.send(err)
    }
  },
)
