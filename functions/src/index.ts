import { initializeApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import { defineSecret } from "firebase-functions/params"
import { HttpsError } from "firebase-functions/v2/https"
import { onDocumentCreated } from "firebase-functions/v2/firestore"
import { beforeUserCreated } from "firebase-functions/v2/identity"
import * as nodemailer from "nodemailer"

initializeApp()

const EMAIL = defineSecret("EMAIL")
const PASSWORD = defineSecret("PASSWORD")

const firestore = getFirestore()

export const onInvited = onDocumentCreated(
  { document: "invitations/{invitation}", secrets: [EMAIL, PASSWORD] },
  (event) => {
    const document = event.data?.data()
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL.value(),
        pass: PASSWORD.value(),
      },
    })

    const mailOptions = {
      from: EMAIL.value(),
      to: document?.email,
      subject:
        "Means Motive has invited you to become a member of their admin portal!",
      text: "Welcome to Means Motive Admin. In order to complete your sign up, go to the following url and sign in!\n\nhttps://admin.meansmotive.com",
    }

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        throw Error("MAIL_SEND_FAILURE")
      } else {
        console.info("MAIL_SEND_SUCCESS")
      }
    })
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
