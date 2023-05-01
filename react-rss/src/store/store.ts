import { combineReducers } from 'redux'
import { PreloadedState, configureStore } from '@reduxjs/toolkit'

import { characterApi } from './services/CharacterService'

import characterReducer from './reducers/characterSlice'
import formReducer from './reducers/formSlice'

export const rootReducer = combineReducers({
  characters: characterReducer,
  form: formReducer,
  [characterApi.reducerPath]: characterApi.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(characterApi.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
