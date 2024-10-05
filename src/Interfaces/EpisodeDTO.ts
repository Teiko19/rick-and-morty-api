export interface EpisodeDTO {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  created: string
}

export const initEpisode: EpisodeDTO = {
  id: 0,
  name: '',
  air_date: '',
  episode: '',
  created: ''
}