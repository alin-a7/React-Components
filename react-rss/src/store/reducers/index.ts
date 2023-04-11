import { combineReducers } from 'redux'

import { characterReducer } from './characterReducer'

export const rootReducer = combineReducers({
  characters: characterReducer,
})

export type RootState = ReturnType<typeof rootReducer>
