import { IconType } from 'react-icons'

export interface route {
  path: string
  element: React.ComponentType
  layout?: React.ComponentType<any>
  children?: route[]
}

export interface SocialLink {
  link: string
  icon: IconType
}
