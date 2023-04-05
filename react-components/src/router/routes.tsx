import React from 'react'

import { PATHS } from './paths'
import Page404 from '../pages/404Page'
import AboutPage from '../pages/AboutPage'
import CardsPage from '../pages/CardsPage'

interface Routes {
  path: string
  component: typeof React.Component
}

export const routes: Routes[] = [
  {
    path: PATHS.ABOUT,
    component: AboutPage,
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
