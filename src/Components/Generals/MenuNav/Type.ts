export interface IMenuNav {
  menuItems: IMenuItem[]
  visible: boolean
}

export interface IMenuItem {
  onClick: () => void
  name: string
  icon: string
  link: string
  id: number
}

export type UseCustomType = [{ menuNav: IMenuNav }, {}, {}, {}]