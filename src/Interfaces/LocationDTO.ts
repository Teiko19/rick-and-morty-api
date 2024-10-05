export interface LocationDTO {
  id: number,
  name: string,
  type: string,
  dimension: string,
  created: string
}

export const initLocation: LocationDTO = {
  id: 0,
  name: '',
  type: '',
  dimension: '',
  created: ''
}