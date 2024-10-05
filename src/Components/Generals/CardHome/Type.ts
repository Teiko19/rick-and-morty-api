type CardItem = {
  text: string,
  description: string,
  image: string,
  onClick: (...args: any[]) => void
}

export type CardHomeProps = {
  id: number,
  title: string,
  list: CardItem[]
}