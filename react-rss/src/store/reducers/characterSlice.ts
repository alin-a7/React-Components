import { createSlice } from '@reduxjs/toolkit'
import { CharacterState } from '../types/characterTypes'

const initialSatate: CharacterState = {
  characterName: '',
}

const characterSlice = createSlice({
  name: 'character',
  initialState: initialSatate,
  reducers: {
    setCharacterName(state, action: { payload: string }) {
      state.characterName = action.payload
    },
  },
})

export const { setCharacterName } = characterSlice.actions
export default characterSlice.reducer
