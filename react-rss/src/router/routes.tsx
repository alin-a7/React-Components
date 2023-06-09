import { FC } from 'react'

import { PATHS } from './paths'
import Page404 from '../pages/404Page'
import AboutPage from '../pages/AboutPage'
import CardsPage from '../pages/CardsPage'
import FormsPage from '../pages/FormsPage'

interface Routes {
  path: string
  component: FC
}

export const routes: Routes[] = [
  {
    path: PATHS.ABOUT,
    component: AboutPage,
  },
  {
    path: PATHS.FORMS,
    component: FormsPage,
  },
  {
    path: PATHS.CARDS,
    component: CardsPage,
  },
  {
    path: PATHS.PAGE_404,
    component: Page404,
  },
]
