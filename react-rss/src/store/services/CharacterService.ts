import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface FetchData {
    results: Character[]
}

export interface Character {
  id: number
  name: string
  species: string
  gender: string
  origin?: {
    name: string
  }
  location: {
    name: string
  }
  image: string
  episode: string[]
}


export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (build) => ({
    fetchAllCharacters: build.query<FetchData, string>({
      query: (name = '') => ({
        url: '/character',
        params: {
          name: name,
        },
      }),
    }),
    fetchSelectCharacter: build.query<Character, number>({
      query: (id: number) => ({
        url: `/character/${id}`,
      }),
    }),
  }),
})

export const {
  useFetchAllCharactersQuery,
  useFetchSelectCharacterQuery,
  util: { getRunningQueriesThunk },
} = characterApi;

export const { fetchAllCharacters } = characterApi.endpoints;
