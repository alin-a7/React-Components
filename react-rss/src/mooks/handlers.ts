import { rest } from 'msw'

import { allCharacters } from '../constants/allCharacters'
import { BASE_URL } from '../pages/CardsPage/utils'

export const handlers = [
  rest.get(BASE_URL, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(allCharacters))
  }),
]
