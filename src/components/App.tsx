import FirebaseService from "../services/firebaseService"
import { BandPageProvider } from "../providers/BandPageProvider"
import bandPageConfig from "../bandpage.config"
import { Show } from "../types/Show"
import { useGetDocuments } from "../hooks/useGetDocuments"
import { useFirebaseFunction } from "../hooks/useFirebaseFunction"
import { ContactForm } from "./ContactForm"
import { ListShow } from "./ListShow"
import { BandcampPlayer } from "./BandcampPlayer"

FirebaseService.init()

export const App = () => {
  const { data: shows } = useGetDocuments<Show>("shows")
  const { runHttpsFunction } = useFirebaseFunction()

  return (
    <BandPageProvider
      bandPageConfig={bandPageConfig}
      sections={[
        {
          name: "LISTEN",
          id: "listen",
          sectionName: "Listen",
          component: () => (
            <BandcampPlayer className="w-full" albumId={662359070} />
          ),
        },
        {
          name: "SHOWS",
          id: "shows",
          sectionName: "Upcoming Shows",
          component: () => (
            <ListShow className="bg-transparent" shows={shows} />
          ),
        },
        {
          name: "CONTACT",
          id: "contact",
          sectionName: "Contact",
          component: () => (
            <ContactForm
              onSubmit={async (payload) =>
                await runHttpsFunction("sendEmail", payload)
              }
            />
          ),
        },
      ]}
    />
  )
}
