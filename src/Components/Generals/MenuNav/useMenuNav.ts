import { useEffect, useState } from "react"
import { TypeCustomHooks } from "../../../Types/TypeCustomHooks"
import { IMenuNav } from "./Interface"

export function useMenuNav(): TypeCustomHooks {

  const [menuItems, setMenuItems] = useState<IMenuNav>();

  useEffect(() => {
    setMenuItems({
      menuItems: [
        { id: 1, icon: "fas fa-home", link: "/", name: "Home", onClick: () => { } },
        { id: 2, icon: "fas fa-users", link: "/characters", name: "Characters", onClick: () => { } },
        { id: 3, icon: "fas fa-globe", link: "/locations", name: "Locations", onClick: () => { } },
        { id: 4, icon: "fas fa-rocket", link: "/episodes", name: "Episodes", onClick: () => { } }
      ],
      visible: false
    })
  }, [])


  return [{}, {}, {}, {}]
}