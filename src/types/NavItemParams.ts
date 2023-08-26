export type NavItemParams = {
  id: string
  name: string
  sectionName?: string
  component: () => JSX.Element
  className?: string
}
