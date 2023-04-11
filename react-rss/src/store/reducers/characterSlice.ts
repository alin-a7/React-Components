import { createSlice } from '@reduxjs/toolkit'
import {
  Character,
  CharacterState,
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
    setCharacterName(state, action: SetCharacterNameAction) {
      state.name = action.payload
    },
  },
})

export default characterSlice.reducer
