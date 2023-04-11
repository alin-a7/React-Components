export interface Character {
    id?: number
    name: string
    status?: string
    species: string
    type?: string
    gender: string
    origin?: {
      name: string
      url: string
    }
    location: {
      name: string
      url?: string
    }
    image: string
    episode: string[]
    url?: string
    created?: string
  }
  
export interface CharacterState {
  characters: Character[]
  selectCharacter: Character
  loading: boolean
  error: null | string
  name: string
}


export interface SetCharacterNameAction {
  payload: string
}
