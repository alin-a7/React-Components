import { createSlice } from '@reduxjs/toolkit'
import { FormDataState, IFormCard } from '../types/formTypes'

const initialSatate: FormDataState = {
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
