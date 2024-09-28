import { useMenuNav } from "./useMenuNav";
import "./Style.scss";
import { Button } from "primereact/button";


export function MenuNav() {

  const [CONSTANTS, STATES, SET_STATES, FUNCTIONS] = useMenuNav();

  return (
    <div className="flex flex-row w-full justify-content-around align-items-center MenuNav h-4rem">
      <Button
        icon="pi pi-home"
        label="Inicio"
        className="buttonMenuNav w-2"
        onClick={() => { }} />
      <Button
        icon="pi pi-users"
        label="Personajes"
        className="buttonMenuNav w-2" />
      <Button
        icon="pi pi-globe"
        label="Localizaciones"
        className="buttonMenuNav w-2" />
      <Button
        icon="pi pi-video"
        label="Episodios"
        className="buttonMenuNav w-2" />
      <Button
        icon="pi pi-sign-out"
        label="Cerrar Sesion"
        className="buttonMenuNav w-2" />
    </div>
  )
}