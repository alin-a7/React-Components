import axios from 'axios'

import { getURL } from '../../pages/CardsPage/utils'

import { AppDispatch } from '../../store/store'
import { characterSlice } from '../reducers/characterSlice'

export const fetchCharacters =
  (name = '') =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(characterSlice.actions.fetchCharacters())
      const response = await axios.get(getURL(name))
      dispatch(
        characterSlice.actions.fetchCharactersSucces(response.data.results),
      )
    } catch {
      dispatch(characterSlice.actions.fetchCharactersError('No cards found...'))
    }
  }

