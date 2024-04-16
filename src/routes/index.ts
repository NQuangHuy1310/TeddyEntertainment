import config from '~/config'
import { route } from '~/models'
import Home from '~/pages/Home'
import HomeLearn from '~/pages/Learn/HomeLearn'
import HomeMovie from '~/pages/Movie/HomeMovie'
import HomeMusic from '~/pages/Music/HomeMusic'
import HomeLayout from '~/layouts/HomeLayout'

export const publicRoutes: route[] = [
  { path: config.routes.home, element: Home, layout: HomeLayout },
  { path: config.routes.music, element: HomeMusic, layout: HomeLayout },
  { path: config.routes.movie, element: HomeMovie, layout: HomeLayout },
  { path: config.routes.learn, element: HomeLearn, layout: HomeLayout }
]

export const privateRoutes: route[] = []
