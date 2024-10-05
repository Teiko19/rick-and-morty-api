export interface CharacterDTO {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  image: string,
  created: string
}

export const initCharacter: CharacterDTO = {
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  image: '',
  created: ''
}