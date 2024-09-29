import { useGeneralHook } from "../../../Utils/GeneralHook/useGeneralHook"
import { IMenuNav, UseCustomType } from "./Type"

export function useMenuNav(): UseCustomType {

  const [_, __, ___, functions] = useGeneralHook();

  const menuNav: IMenuNav = {
    menuItems: [{
      onClick: () => functions.navigate("../Home"),
      name: "Inicio",
      icon: "pi pi-home",
      link: "/home",
      id: 1
    }, {
      onClick: () => functions.navigate("../Characters"),
      name: "Personajes",
      icon: "pi pi-users",
      link: "/Characters",
      id: 2
    }, {
      onClick: () => functions.navigate("../Locations"),
      name: "Localizaciones",
      icon: "pi pi-globe",
      link: "/Locations",
      id: 3
    }, {
      onClick: () => functions.navigate("../Episodes"),
      name: "Episodios",
      icon: "pi pi-video",
      link: "/Episodes",
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