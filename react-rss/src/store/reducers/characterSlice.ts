import { createSlice } from '@reduxjs/toolkit'

export interface CharacterState {
  characterName: string
  }
  
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
