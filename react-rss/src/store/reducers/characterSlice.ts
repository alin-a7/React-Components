import { createSlice } from '@reduxjs/toolkit'
import {
  Character,
  CharacterAction,
  CharacterActionTypes,
  CharacterState,
  FetchCharactersErrorAction,
  FetchCharactersSaccessAction,
  SetCharacterNameAction,
} from '../types/characterTypes'

const initialSatate: CharacterState = {
  characters: [],
  selectCharacter: {} as Character,
  loading: false,
  error: null,
  name: '',
}

export const characterSlice = createSlice({
  name: 'character',
  initialState: initialSatate,
  reducers: {
    fetchCharacters(state) {
      state.loading = true
    },
    fetchCharactersSucces(state, action: FetchCharactersSaccessAction) {
      state.loading = false
      state.error = ''
      state.characters = action.payload
    },
    fetchCharactersError(state, action: FetchCharactersErrorAction) {
      state.loading = false
      state.error = action.payload
    },
    setCharacterName(state, action: SetCharacterNameAction) {
      state.name = action.payload
    },
  },
})

export default characterSlice.reducer
