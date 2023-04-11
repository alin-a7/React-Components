import axios from 'axios'
import { Dispatch } from 'redux'

import { BASE_URL } from '../../pages/CardsPage/utils'

import { CharacterAction, CharacterActionTypes } from '../types/characterTypes'


export const fetchCharacters = () => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      dispatch({ type: CharacterActionTypes.FETCH_CHARACTERS })
      const response = await axios.get(BASE_URL)
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
        payload: response.data.results,
      })
    } catch {
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
        payload: 'Download error, check your internet connection',
      })
    }
  }
}
