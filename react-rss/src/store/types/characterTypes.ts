import { Character } from '../../pages/CardsPage/hooks'

export interface CharacterState {
  characters: Character[]
  loading: boolean
  error: null | string
}

export enum CharacterActionTypes {
  FETCH_CHARACTERS = 'FETCH_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
}

interface FetchUsersAction {
  type: CharacterActionTypes.FETCH_CHARACTERS
}
interface FetchUsersSaccessAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS
  payload: Character[]
}
interface FetchUsersErrorAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_ERROR
  payload: string
}
export type CharacterAction =
  | FetchUsersAction
  | FetchUsersSaccessAction
  | FetchUsersErrorAction
