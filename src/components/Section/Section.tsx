import { useMemo } from "react"
import { PlayerSection, SectionParams } from "../../types/SectionParams"
import { BandcampPlayer } from "../BandcampPlayer"
import { ContactForm } from "../ContactForm"
import { ListShow } from "../ListShow"
import ReactMarkdown from "react-markdown"
import { Gallery } from "../Gallery"

interface SectionProps {
  section: SectionParams
}

export const Section = ({ section }: SectionProps) => {
  const { id, sectionName } = section

  const SectionComponent = useMemo(
    () => getSectionComponent(section),
    [section],
  )

  return (
    <section id={id} className="flex flex-col justify-center w-full gap-y-12">
      {sectionName ? <h4>{sectionName}</h4> : null}
      <SectionComponent />
    </section>
  )
}

const getSectionComponent = (section: SectionParams) => {
  switch (section.type) {
    case "article":
      return () => {
        return (
          <div className="grid gap-y-4">
            <ReactMarkdown>{section.data}</ReactMarkdown>
          </div>
        )
      }
    case "contact":
      return () => (
        <ContactForm
          template_id={section.data.template_id}
          service_id={section.data.service_id}
          user_id={section.data.user_id}
        />
      )
    case "player":
      return () => getPlayer(section.data)
    case "show":
      return () => <ListShow shows={section.data} />
    case "gallery":
      return () => {
        return <Gallery imagePaths={section.data} />
      }
  }
}

const getPlayer = (data: PlayerSection["data"]) => {
  switch (data.playerType) {
    case "apple":
      return <></>
    case "bandcamp":
      return <BandcampPlayer url={data.embedURL} />
    case "spotify":
      return <></>
  }
}
