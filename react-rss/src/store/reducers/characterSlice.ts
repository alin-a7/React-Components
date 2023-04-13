import { createSlice } from '@reduxjs/toolkit'
import { CharacterState } from '../types/characterTypes'

const initialSatate: CharacterState = {
  characterName: '',
}

export const characterSlice = createSlice({
  name: 'character',
  initialState: initialSatate,
  reducers: {
    setCharacterName(state, action: { payload: string }) {
      state.characterName = action.payload
    },
  },
})

export default characterSlice.reducer
