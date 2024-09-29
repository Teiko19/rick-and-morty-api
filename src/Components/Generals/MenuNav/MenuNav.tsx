import { useMenuNav } from "./useMenuNav";
import "./Style.scss";
import { Button } from "primereact/button";


export function MenuNav() {

  const [value] = useMenuNav();

  return (
    <div className="flex flex-row w-full justify-content-around align-items-center MenuNav h-4rem py-4">
      {value.menuNav.menuItems.map(i =>
        <Button
          key={i.id}
          icon={i.icon}
          className="ButtonMenuNav w-2"
          onClick={i.onClick}
          label={i.name} />)}
    </div>)
}