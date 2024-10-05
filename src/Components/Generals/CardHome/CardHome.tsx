import { CardHomeProps } from "./Type";
import "./Style.scss";
import { Button } from "primereact/button";

export function CardHome(props: Readonly<CardHomeProps>) {

  const { title, list } = props;

  return (
    <div className="flex flex-column w-full h-full mx-2">
      <p className="flex w-full justify-content-center">{title}</p>
      <div className="flex flex-column w-full h-full justify-content-around align-content-center">
        {list.map((item, index) => {
          const key = index;
          return <Button className="w-full cardItem" key={key} label={item.text} onClick={item.onClick} />
        })}
      </div>
    </div>)
}