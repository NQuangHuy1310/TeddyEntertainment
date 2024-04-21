import routes from '~/config/routes'
import { SocialLink } from '~/models'

import { FaFacebookSquare, FaInstagram, FaGithub, FaYoutubeSquare, FaTiktok } from 'react-icons/fa'

export const navbar: { name: string; to: string }[] = [
  { name: 'Xem phim', to: routes.movie },
  { name: 'Nghe nhạc', to: routes.music },
  { name: 'Học tập', to: routes.learn },
  { name: 'Tin tức', to: routes.blog }
]

export const SocaialLinks: SocialLink[] = [
  {
    link: '',
    icon: FaFacebookSquare
  },
  {
    link: '',
    icon: FaInstagram
  },
  {
    link: '',
    icon: FaGithub
  },
  {
    link: '',
    icon: FaYoutubeSquare
  },
  {
    link: '',
    icon: FaTiktok
  }
]
