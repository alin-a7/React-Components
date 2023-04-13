export interface Character {
    id: number
    name: string
    species: string
    gender: string
    origin?: {
      name: string
    }
    location: {
      name: string
    }
    image: string
    episode: string[]
  }
  
export interface CharacterState {
  characterName: string
}
