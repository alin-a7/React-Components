import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import characterReducer from './reducers/characterSlice'

export const rootReducer = combineReducers({
  characters: characterReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
