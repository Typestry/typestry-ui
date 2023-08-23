import { useNavigate } from "react-router"
import { BandcampPlayer } from "../components/BandcampPlayer"
import { ContactForm } from "../components/ContactForm"
import { ListShow } from "../components/ListShow"
import { useFirebaseFunction } from "../hooks/useFirebaseFunction"
import { useGetDocuments } from "../hooks/useGetDocuments"
import { useInterSectionObserver } from "../hooks/useIntersectionObserver"
import { Show } from "../types/Show"
import { useRef } from "react"

const HEADER_CLASS =
  "text-3xl font-serif font-bold tracking-wide text-fuchsia-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]"

export const Main = () => {
  const { runHttpsFunction } = useFirebaseFunction()
  const { data: shows } = useGetDocuments<Show>("shows")
  const navigate = useNavigate()
  const refs = useRef<Array<HTMLElement>>([])

  useInterSectionObserver(
    (entries) => {
      for (const { target, isIntersecting } of entries) {
        const id = target.getAttribute("id")
        if (isIntersecting) {
          navigate(`#${id}`)
          break
        }
      }
    },
    refs.current,
    { threshold: 1 },
  )

  const handleRef = (ref: HTMLElement) => {
    refs.current.push(ref)
  }

  return (
    <div className="flex flex-col gap-y-24 md:max-w-2xl w-full">
      <section ref={handleRef} id="listen">
        <BandcampPlayer />
      </section>
      <section
        ref={handleRef}
        id="shows"
        className="flex flex-col gap-y-4 h-[400px] md:min-h-[600px] justify-center"
      >
        <h4 className={HEADER_CLASS}>Upcoming Shows</h4>
        <ListShow shows={shows} />
      </section>
      <section ref={handleRef} id="contact" className="flex flex-col gap-y-4">
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
