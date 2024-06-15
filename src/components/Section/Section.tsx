"use client"

import { PlayerSection, SectionParams } from "@/types/SectionParams"
import BandcampPlayer from "@/components/BandcampPlayer"
import ContactForm from "@/components/ContactForm"
import ListEvent from "@/components/ListShow"
import ReactMarkdown from "react-markdown"
import Gallery from "@/components/Gallery"

export interface SectionProps {
  section: SectionParams
}

const Section = ({ section }: SectionProps) => {
  const { id, sectionName } = section

  return (
    <section id={id} className="flex flex-col justify-center w-full gap-y-12">
      {sectionName ? <h4>{sectionName}</h4> : null}
      <SectionComponent {...section} />
    </section>
  )
}

const SectionComponent = (section: SectionParams) => {
  let element = null

  switch (section.type) {
    case "article":
      element = (
        <div className="grid gap-y-4">
          <ReactMarkdown>{section.data}</ReactMarkdown>
        </div>
      )
      break
    case "contact":
      element = (
        <ContactForm
          template_id={section.data.template_id}
          service_id={section.data.service_id}
          user_id={section.data.user_id}
        />
      )
      break
    case "player":
      element = getPlayer(section.data)
      break
    // Eventually "show" will be deprecated in favor of "event"
    case "show":
    case "event":
      element = <ListEvent events={section.data} />
      break
    case "gallery":
      element = <Gallery images={section.data} />
  }

  return element
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

export default Section
