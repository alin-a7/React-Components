import { createSlice } from '@reduxjs/toolkit'

export interface IFormCard {
  text: string
  date: string
  language: string
  gender: string
  file: string
  agreement: boolean
}

const initialSatate: { formData: IFormCard[] } = {
  formData: [],
}

const formSlice = createSlice({
  name: 'formData',
  initialState: initialSatate,
  reducers: {
    addCard(state, action: { payload: IFormCard }) {
      state.formData = [...state.formData, action.payload]
    },
  },
})

export const { addCard } = formSlice.actions
export default formSlice.reducer
