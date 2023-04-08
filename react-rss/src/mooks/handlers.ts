import { rest } from 'msw'
import { BASE_URL } from '../pages/CardsPage/utils'

export const handlers = [
  rest.get(BASE_URL, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 19,
          name: 'Antenna Rick',
          status: 'unknown',
          species: 'Human',
          type: 'Human with antennae',
          gender: 'Male',
          origin: {
            name: 'unknown',
            url: '',
          },
          location: {
            name: 'unknown',
            url: '',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/10'],
          url: 'https://rickandmortyapi.com/api/character/19',
          created: '2017-11-04T22:28:13.756Z',
        },
        {
          id: 20,
          name: 'Ants in my Eyes Johnson',
          status: 'unknown',
          species: 'Human',
          type: 'Human with ants in his eyes',
          gender: 'Male',
          origin: {
            name: 'unknown',
            url: '',
          },
          location: {
            name: 'Interdimensional Cable',
            url: 'https://rickandmortyapi.com/api/location/6',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/8'],
          url: 'https://rickandmortyapi.com/api/character/20',
          created: '2017-11-04T22:34:53.659Z',
        },
      ]),
    )
  }),
]
