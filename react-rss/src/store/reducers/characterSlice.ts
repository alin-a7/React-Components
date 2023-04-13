import { createSlice } from '@reduxjs/toolkit'
import { CharacterState, SetCharacterNameAction } from '../types/characterTypes'

const initialSatate: CharacterState = {
  characterName: '',
}

export const characterSlice = createSlice({
  name: 'character',
  initialState: initialSatate,
  reducers: {
    setCharacterName(state, action: SetCharacterNameAction) {
      state.characterName = action.payload
    },
  },
})

export default characterSlice.reducer
