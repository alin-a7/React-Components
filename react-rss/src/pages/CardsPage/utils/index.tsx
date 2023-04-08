import { SyntheticEvent } from "react"

export const BASE_URL = 'https://rickandmortyapi.com/api/character'

export const getURL = (name: string) => {
  return name ? `${BASE_URL}/?name=${name}` : BASE_URL
}

export const errorImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
  const img = e.target as HTMLImageElement
  img.onerror = null
  img.src = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
}

