import { Character } from '../store/types/characterTypes'

export const allCharacters: Character[] = [
  {
    id: 19,
    name: 'Antenna Rick',
    species: 'Human',
    gender: 'Male',
    origin: {
      name: 'unknown',
    },
    location: {
      name: 'unknown',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/10'],
  },
  {
    id: 20,
    name: 'Ants in my Eyes Johnson',
    species: 'Human',
    gender: 'Male',
    origin: {
      name: 'unknown',
    },
    location: {
      name: 'Interdimensional Cable',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/8'],
  },
]
