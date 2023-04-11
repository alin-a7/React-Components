import {
  CharacterAction,
  CharacterActionTypes,
  CharacterState,
} from '../types/characterTypes'

const initialSatate: CharacterState = {
  characters: [],
  loading: false,
  error: null,
}

export const characterReducer = (
  state = initialSatate,
  action: CharacterAction,
): CharacterState => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_CHARACTERS:
      return { loading: true, error: null, characters: [] }
    case CharacterActionTypes.FETCH_CHARACTERS_SUCCESS:
      return { loading: false, error: null, characters: action.payload }
    case CharacterActionTypes.FETCH_CHARACTERS_ERROR:
      return { loading: false, error: action.payload, characters: [] }
    default:
      return state
  }
}
