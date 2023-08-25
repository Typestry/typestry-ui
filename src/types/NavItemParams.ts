import { Contact } from "../../global/types/Contact"
import { Show } from "./Show"

type BaseParams = {
  id: string
  name: string
  sectionName?: string
}

interface ShowListParams extends BaseParams {
  type: "showList"
  shows: Array<Show>
}

interface MusicPlayerParams extends BaseParams {
  type: "musicPlayer"
  bandcampAlbumId: number
}

interface ContactParams extends BaseParams {
  type: "contact"
  onSubmit: (payload: Contact) => void
}

interface CustomParams extends BaseParams {
  type: "custom"
  component: () => JSX.Element
}

export type NavItemParams =
  | ShowListParams
  | MusicPlayerParams
  | ContactParams
  | CustomParams
