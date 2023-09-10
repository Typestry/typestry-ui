import { Show } from "./Show"

export type PlayerType = "spotify" | "bandcamp" | "apple"

export interface SectionBase {
  order: number
  id: string
  name: string
  sectionName?: string
}

export interface ShowSection extends SectionBase {
  type: "show"
  data: Array<Show>
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

export type SectionParams =
  | ShowSection
  | ContactSection
  | PlayerSection
  | ArticleSection
