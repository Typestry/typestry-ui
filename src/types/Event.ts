export interface CTA {
  url: string // "https://www.loremipsum.com/ipsum"
  label: string // "Tickets"
  altText: string // "Purchase tickets"
}

export default interface Event {
  city: string // "Kansas City, MO"
  date?: string // "2023‐09‐22T07:00:00−06:00 "
  description?: string // "A description"
  price?: string // "$10"
  venue: string // "The Rhino"
  callToAction?: CTA
  eventImage?: string // "https://www.loremipsum.com/ipsum.jpg"
  address?: string // 1234 Main St, Kansas City, MO 64105
}
