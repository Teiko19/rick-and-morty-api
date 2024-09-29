import { useGeneralHook } from "../../../Utils/GeneralHook/useGeneralHook"
import { IMenuNav, UseCustomType } from "./Type"

export function useMenuNav(): UseCustomType {

  const [_, __, ___, functions] = useGeneralHook();

  const menuNav: IMenuNav = {
    menuItems: [{
      onClick: () => functions.navigate("../"),
      name: "Inicio",
      icon: "pi pi-home",
      link: "/",
      id: 1
    }, {
      onClick: () => functions.navigate("../characters"),
      name: "Personajes",
      icon: "pi pi-users",
      link: "/characters",
      id: 2
    }, {
      onClick: () => functions.navigate("../locations"),
      name: "Localizaciones",
      icon: "pi pi-globe",
      link: "/locations",
      id: 3
    }, {
      onClick: () => functions.navigate("../episodes"),
      name: "Episodios",
      icon: "pi pi-video",
      link: "/episodes",
      id: 4
    }, {
      onClick: () => functions.navigate("../"),
      name: "Cerrar Sesion",
      icon: "pi pi-sign-out",
      link: "/",
      id: 5
    }],
    visible: false
  }

  return [
    { menuNav },
    {},
    {},
    {}
  ]
}