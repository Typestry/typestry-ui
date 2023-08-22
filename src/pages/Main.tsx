import { BandcampPlayer } from "../components/BandcampPlayer"
import { ContactForm } from "../components/ContactForm"
import { ListShow } from "../components/ListShow"
import { useFirebaseFunction } from "../hooks/useFirebaseFunction"
import { useGetDocuments } from "../hooks/useGetDocuments"
import { Show } from "../types/Show"

const HEADER_CLASS =
  "text-3xl font-serif font-bold tracking-wide text-fuchsia-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]"

export const Main = () => {
  const { runHttpsFunction } = useFirebaseFunction()
  const { data: shows } = useGetDocuments<Show>("shows")

  return (
    <div className="flex flex-col md:max-w-2xl w-full">
      <section id="listen">
        <BandcampPlayer />
      </section>
      <section
        id="shows"
        className="flex flex-col gap-y-4 min-h-[768px] justify-center"
      >
        <h4 className={HEADER_CLASS}>Upcoming Shows</h4>
        <ListShow shows={shows} />
      </section>
      <section id="contact" className="flex flex-col gap-y-4">
        <h4 className={HEADER_CLASS}>Contact</h4>
        <ContactForm
          onSubmit={async (payload) =>
            await runHttpsFunction("sendEmail", payload)
          }
        />
      </section>
    </div>
  )
}
