import Event from "./Event"

export type PlayerType = "spotify" | "bandcamp" | "apple"

export interface SectionBase {
  order: number
  id: string
  name: string
  sectionName?: string
}

export interface EventSection extends SectionBase {
  type: "event" | "show"
  data: Array<Event>
}

export interface ContactSection extends SectionBase {
  type: "contact"
  data: {
    template_id: string
    user_id: string
    service_id: string
  }
}

export interface PlayerSection extends SectionBase {
  type: "player"
  data: {
    playerType: PlayerType
    embedURL: string
  }
}

export interface ArticleSection extends SectionBase {
  type: "article"
  data: string
}

export interface GallerySection extends SectionBase {
  type: "gallery"
  data: Array<string>
}

export type SectionParams =
  | EventSection
  | ContactSection
  | PlayerSection
  | ArticleSection
  | GallerySection
