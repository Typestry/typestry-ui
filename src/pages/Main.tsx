import { BandCampPlayer } from "../components/BandcampPlayer"
import { ContactForm } from "../components/ContactForm"
import { useFirebaseFunction } from "../hooks/useFirebaseFunction"

export const Main = () => {
  const { runHttpsFunction } = useFirebaseFunction()

  return (
    <div className="grid grid-flow-row gap-y-24 md:max-w-2xl w-full">
      <section className="mt-8" id="listen">
        <BandCampPlayer />
      </section>
      <section id="contact" className="grid grid-flow-row gap-y-4 mb-4">
        <h4 className="text-3xl font-serif font-bold tracking-wide text-fuchsia-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] mb-4">
          Contact
        </h4>
        <ContactForm
          onSubmit={async (payload) =>
            await runHttpsFunction("sendEmail", payload)
          }
        />
      </section>
    </div>
  )
}
