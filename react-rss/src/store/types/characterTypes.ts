export interface Character {
    id?: number
    name: string
    status?: string
    species: string
    type?: string
    gender: string
    origin?: {
      name: string
      url: string
    }
    location: {
      name: string
      url?: string
    }
    image: string
    episode: string[]
    url?: string
    created?: string
  }
  
export interface CharacterState {
  characters: Character[]
  selectCharacter: Character
  loading: boolean
  error: null | string
  name: string
}

export enum CharacterActionTypes {
  FETCH_CHARACTERS = 'FETCH_CHARACTERS',
  FETCH_SELECT_CHARACTER = 'FETCH_SELECT_CHARACTER',
  FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
  SET_CHARACTER_NAME = 'SET_CHARACTER_NAME',
}

export interface FetchCharactersAction {
  type: CharacterActionTypes.FETCH_CHARACTERS
}
export interface FetchCharactersSaccessAction {
//   type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS
  payload: Character[]
}
export interface FetchSelectCharacterAction {
//   type: CharacterActionTypes.FETCH_SELECT_CHARACTER
  payload: Character
}
export interface FetchCharactersErrorAction {
//   type: CharacterActionTypes.FETCH_CHARACTERS_ERROR
  payload: string
}
export interface SetCharacterNameAction {
//   type: CharacterActionTypes.SET_CHARACTER_NAME
  payload: string
}
export type CharacterAction =
  | FetchCharactersAction
  | FetchCharactersSaccessAction
  | FetchCharactersErrorAction
  | SetCharacterNameAction
  | FetchSelectCharacterAction
