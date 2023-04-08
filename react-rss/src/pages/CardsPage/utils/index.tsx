export const BASE_URL = 'https://rickandmortyapi.com/api/character'

export const getURL = (name: string) => {
  return name ? `${BASE_URL}/?name=${name}` : BASE_URL
}

