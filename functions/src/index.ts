import { initializeApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import { defineSecret } from "firebase-functions/params"
import { HttpsError, onRequest } from "firebase-functions/v2/https"
import { beforeUserCreated } from "firebase-functions/v2/identity"
import * as nodemailer from "nodemailer"

initializeApp()

const EMAIL = defineSecret("EMAIL")
const PASSWORD = defineSecret("PASSWORD")

const firestore = getFirestore()

export const sendEmail = onRequest(
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

export const writeUser = beforeUserCreated(async (event) => {
  const user = event.data
  const invitations = await firestore
    .collection("invitations")
    .where("email", "==", user.email)
    .limit(1)
    .get()

  if (invitations.empty) {
    throw new HttpsError(
      "permission-denied",
      "You must be invited by a team member in your organization!",
    )
  }

  const maybeInvitation = invitations.docs[0]
  const isInvited = maybeInvitation.exists

  if (isInvited) {
    await firestore.doc(`users/${user.uid}`).set({
      id: user.uid,
      email: user.email,
      dateAdded: event.timestamp,
      displayName: user.displayName,
      invited: isInvited,
      permissions: maybeInvitation.data().permissions,
    })
    return
  } else {
    throw new HttpsError(
      "permission-denied",
      "You must be invited by a team member in your organization!",
    )
  }
})
