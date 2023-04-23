import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Character } from '../types/characterTypes'

interface FetchData {
    results: Character[]
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
